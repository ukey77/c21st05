const Daemon = require("../daemon");

class LoginRoute extends Daemon{
    constructor(id){
        super(id);
    }
    getRoute(){
        this.router.route("/")
        .post((req,res)=>{
            const {id, pw} = req.body;
            this.fs.readFile(this.path.join(__dirname,"../../assets/data/loginInfo.json"),(err, data)=>{
                const loginInfo = JSON.parse(data.toString());
                const {id: dataId, pw: dataPW} = loginInfo;
                if( (id === dataId) && (pw === dataPW)){
                    res.render("welcome",{userId: id});
                }else{
                    res.render("login",{loginInfo: "다시 로그인 해주세요."}); 
                }
            });
        })
    }
    get loginRoute(){
        return this.router;
    }
    run(){
        super.run();
        this.getRoute();
    }
}

const loginRoute = new LoginRoute("loginRoute");
loginRoute.run();

module.exports = loginRoute.loginRoute; 