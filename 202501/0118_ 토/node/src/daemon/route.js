class Route {
    constructor(id) {
        this.id = id;
        this.port = 3000;
        this.express = null;
        this.app = null;
    }
    daemonReady() {
        this.express = require("express");
        this.app = this.express();
        // == static == (use)
        this.app.use(this.express.static("public"));

        // == pug view engine == (set)
        this.app.set("views","./views");
        this.app.set("view engine", "pug");
        // === body-parser ===
        /* 
        body-parser가 express에 내장된 이후로, 별도로 설치하지 않고도 express에서 제공하는
        미들웨어인 express.json과 express.urlencoded()를 사용할 수 있습니다.
        */
        // == body-parser == (use)
        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended: true}));
        // 원래는
        // this.bodyParser = require("body-parser");
        // this.app.use(this.bodyParser.urlencoded({extended: true}));

        this.app.listen(this.port,()=>{
            console.log(`http://localhost:${this.port}`);
        });
    }
    runRoute() {
        this.app.get("/",(req,res)=>{
            res.send("Hello World");
        });

        this.app.get("/pug",(req,res)=>{
            const scoreData = {
                average: "평균",
                maxScore: "최고점",
                minScore: "최저점",
                standardDeviation: "표준편차"
            }
            res.render("score",{title:"Score Display", scoreData: scoreData});
        });

        this.app.get("/img",(req,res)=>{
            res.send("<img src='./images/bye.png'>");
        });
    }
    run() {
        this.daemonReady();
        this.runRoute();
    }
}

const daemon = new Route("daemon");
module.exports = daemon;