class Daemon{
    constructor(id){
        this.id = id;
        this.express = require("express");
        this.app = this.express();
         
    }
    defaultSettings(){
        this.app.use(this.cors());

        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended: true}));
    }
    listenPort(){
        const portInfo = 3003;
        this.app.listen(portInfo ,()=>{
            console.log(`http://localhost:${portInfo}`);
        });
    }
    dbSettings(){
        const mysql = require("mysql");
        const dbConfig = require("./config/dbConfig");
        return{
            sqlCommand : require("./config/sqlCommand"),
            connection : mysql.createConnection(dbConfig)
        }
    }
    runDaemon(){
        this.listenPort();
        this.app.get("/",(req,res)=>{
            res.send("Hello World");
        });

        this.app.get("/bloodType",(req,res)=>{
            const bloodType = require("./doIt/bloodType");
            bloodType(req,res, this.dbSettings());
        });

        this.app.post("/saveInfo",(req,res)=>{
            const saveInfo = require("./doIt/saveInfo");
            saveInfo(req,res, this.dbSettings());
        });

        this.app.post("/delete",(req,res)=>{
            const deleteData = require("./doIt/deleteData");
            deleteData(req,res,this.dbSettings())
        });

        this.app.post("/update",(req,res)=>{
            const updateInfo = require("./doIt/updateInfo");
            updateInfo(req,res,this.dbSettings());
        })
    }
    run(){
        this.defaultSettings();
        this.dbSettings();
        this.runDaemon();
    }
}
const daemon = new Daemon("daemon");
daemon.run();