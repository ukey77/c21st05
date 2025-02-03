class Daemon {
    constructor(id) {
        this.id = id;
        this.express = require("express");
        this.app = this.express();
    }
    listenPort() {
        const port = 3333;
        this.app.listen(port, () => {
            console.log(`http://localhost:${port}`);
        });
    }
    runRoute() {
        this.listenPort();
        this.app.get("/", (req, res) => {
            res.send("Hello World");
        });

        this.app.get("/:id", (req, res) => {
            if (req.params.id === "favicon.ico") {
                return res.status(204).end(); // 204 No Content 응답
            }
            res.send(req.params.id);
            console.log(req.params);
        });

    }
    run() {
        this.runRoute();
    }
}

const daemon = new Daemon("daemon");
daemon.run();