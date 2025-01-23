class Daemon {
    constructor(id) {
        this.id = id;
        this.dataId = 1;
        this.express = null;
        this.app = null;
        this.fs = null;
        this.os = null;
        this.cors = null;
        this.port = 3333;
    }
    settings() {
        this.express = require("express");
        this.app = this.express();
        this.fs = require("fs");
        this.os = require("os");
        this.cors = require("cors");

        this.app.use(this.cors());
        this.app.use(this.express.static("assets")); // static
        this.listenPort();
    }
    listenPort() {
        this.app.listen(this.port, () => {
            console.log(`http://localhost:${this.port}`);
        });
    }
    runDaemon() {
        this.app.get("/", (req, res) => {
            res.send(`<h1>Welcome PORT:${this.port}</h1>`)
        });
        this.app.get("/memory", (req, res) => {
            res.send(`freemem: ${this.os.freemem()}<br>totalmem:${this.os.totalmem()}`)
        });

        this.app.get("/data", (req, res) => {
            this.fs.writeFile("./assets/data/memoryData.json", this.osData(), (err) => {
                if (err) throw err;
                this.fs.readFile("./assets/data/memoryData.json", (err, data) => {
                    res.send(JSON.parse(data));
                    console.log(JSON.parse(data))
                });
            });
        });
    }
    osData(){
        const osData = {
            id: "os_data",
            freemem: this.os.freemem(),
            totalmem: this.os.totalmem()
        }
        return JSON.stringify(osData);
    }
    run() {
        this.settings();
        this.runDaemon();
    }
}

const daemon = new Daemon("daemon");
daemon.run();