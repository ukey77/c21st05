class Daemon{
    constructor(id){
        this.id=id;
        this.express = null;
        this.app = null;
        this.port= 5555;
        this.path = null;
    }
    settings(){
        this.express = require("express");
        this.app = this.express();
        this.path = require("path");

        this.app.use(this.express.static("assets"));
        this.listen();
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`http://localhost:${this.port}`)
        })
    }
    runDaemon(){
        this.app.get("/",(req,res)=>{
            res.sendFile(this.path.join(__dirname, "/htmlTemplate/index.html"));
        });
    }
    run(){
        this.settings();
        this.runDaemon();
    }
}

const daemon = new Daemon("daemon");
daemon.run();