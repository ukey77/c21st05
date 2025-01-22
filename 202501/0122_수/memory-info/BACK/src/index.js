class Daemon {
    constructor(id) {
        this.id = id;
        this.dataId = 1;
        this.express = null;
        this.app = null;
        this.fs = null;
        this.os = null;
        this.port = 3333;
    }
    settings() {
        this.express = require("express");
        this.app = this.express();
        this.fs = require("fs");
        this.os = require("os");

        this.app.use(this.express.static("assets")); // static

        this.app.set("views", "./views");
        this.app.set("view engine", "pug");

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
    }
    osData(){
        const osData = {
            id: "os_data",
            freemem: this.os.freemem(),
            totalmem: this.os.totalmem()
        }

        return JSON.stringify(osData)
    }
    writeMemory() {
        this.fs.writeFile("./assets/data/memoryData.json", this.osData(), (err) => {
            if (err) throw err;
            this.fs.readFile("./assets/data/memoryData.json", (err, data) => {
                if (err) throw err;
                console.log(JSON.parse(data));
            })
        });

    }
    run() {
        this.settings();
        this.runDaemon();
        const loop = () => {
            this.writeMemory();
            setTimeout(loop, 2000); 
        }
        loop();
    }
}

const daemon = new Daemon("daemon");
daemon.run();