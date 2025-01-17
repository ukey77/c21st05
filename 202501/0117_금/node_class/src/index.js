class Daemon{
    constructor(id){
        this.id=id;
        this.express = null;
        this.app = null;
    }
    setDaemon(){
        this.express = require("express");
        this.app = this.express();

        this.app.set("view engine","pug");
        this.app.set("views","./views");
        this.app.use(this.express.static("public"));
    }
    runRoute(){
        this.app.get("/",(req,res)=>{
            res.send("Hello Root");
        });

        this.app.get("/img",(req,res)=>{
            res.send(`<h1>Good Bye</h1><img src="./images/bye.png">`);
        });

        this.app.get("/dynamic",(req,res)=>{
            const list = [...new Array(5)].reduce((acc,cur,i)=>{
                return acc + `<li>HelloWorld${i+1}</li>`
            }, "");
            res.send(list);
        });

        this.app.get("/template",(req,res)=>{
            res.render("template",{title: "Template", time: Date()})
        });

        this.app.get("/option",(req,res)=>{
            const {select} = req.query;
            console.log(req.query.select);
            res.send(select);
        });
        
    }
    listen(){
        this.app.listen(2000,()=>{
            console.log(`http://localhost:2000`);
        })
    }
    run(){
        this.setDaemon();
        this.runRoute();
        this.listen();
    }
}

const main = (() => {
    const daemon = new Daemon();
    daemon.run();
})();