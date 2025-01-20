class Daemon{
    constructor(id){
        this.id=id;
        this.express = null;
        this.app = null;
        this.port = 3003;
    }
    initSettings(){
        this.express = require("express");
        this.app = this.express();
        
        this.app.use(this.express.static("assets"));
        
        this.app.set("views","./views");
        this.app.set("view engine", "pug");
        this.app.locals.pretty = true;

        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended:true}));
        this.listenPort();
    }
    listenPort(){
        this.app.listen(this.port,()=>{
            console.log(`http://localhost:${this.port}`);
        });
    }
    runRoute(){
        this.app.get("/",(req,res)=>{
            res.send(`<h1>Hello ${this.port}port Listen</h1>`);
        });

        this.app.get("/cute",(req,res)=>{
            res.send(`<img src="./images/cute.jpg">`);
        })

        this.app.get("/pug",(req,res)=>{
            res.render("template",{title: "Test", hello: "Hello Pug World", date: Date()})
        });

        this.app.post("/sum",(req,res)=>{
            console.log("value1",req.body.value1);
            console.log("value2",req.body.value2);
            res.render("sum",{title: "Summation",value1:Number(req.body.value1),value2:Number(req.body.value2) })
        });

    }
    run(){
        this.initSettings();
        this.runRoute();
    }
}

const daemon = new Daemon("daemon");
daemon.run();