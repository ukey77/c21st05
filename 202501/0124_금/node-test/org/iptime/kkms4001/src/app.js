//////history/////
// loginApp
// 2025/01/24 KYJ
// 2025/01/25 CDR
//////////////////


////////////////////////////////////////
// 01/31에 이어서 !
class LoginApp{
    constructor(id){
        this.id=id;
    }
    run(){

    }
}
const loginAppClass = new LoginApp("loginApp");
loginAppClass.run();
////////////////////////////////////////

const config = require("./config/config");
const loginApp = require("./modules/expressObj"); // express()
const visitPath = require("./modules/expressRouter"); // express.Router()
const bodyParser = require("body-parser");

const routeHome = require("./pathInfo/routeHome");
const routeJoin = require("./pathInfo/routeJoin");
const createUser = require("./pathInfo/routeCreateUser");
const routeLogin = require("./pathInfo/routeLogin");

//Environment
loginApp.use(bodyParser.json());
loginApp.use(bodyParser.urlencoded({extended: true}));
////////////////////////////////////////
visitPath.route("/")
.get((req, res) => {
    const hi = "Welcome to the Visit Zard!"; 
    res.send(`<h1>${hi}</h1>`);
});

loginApp.use("/zard", visitPath);

////////////////////////////////////////
loginApp.route("/").get((req,res)=>{routeHome(req,res);});

loginApp.route("/join").get((req,res)=>{routeJoin(req,res);});

loginApp.route("/createUser").post((req,res)=>{createUser(req,res);});

loginApp.route("/login").get((req,res)=>{res.send("login")});

// listen
loginApp.listen(config["port"],()=>{
    console.log(`http://${config["hostname"]}:${config["port"]}`);
});

