class Daemon{
    constructor(id){
        this.id=id;
        this.express = null;
        this.app = null;
        this.fs = null;
        this.path = null;
        this.router = null;
    }
    init(){
        this.express = require("express");
        this.app = this.express();
        this.fs = require("fs");
        this.path = require("path");
        this.router = this.express.Router();  

        this.settings();
    }
    settings(){
        // static
        this.app.use(this.express.static("assets"));
        
        // pug
        this.app.set("view engine", "pug");
        this.app.set("views", "./views");
        this.app.locals.pretty = true;

        //json
        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended:true}));
    }
    run(){
        this.init();
    }
}

module.exports = Daemon;