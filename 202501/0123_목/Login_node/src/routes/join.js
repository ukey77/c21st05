const Daemon = require("../daemon");

class JoinRoute extends Daemon{
    constructor(id){
        super(id);
    }
    getRoute(){
        this.router.route("/")
        .get((req,res)=>{
            res.sendFile(this.path.join(__dirname,"../../assets/htmlTemplate/join.html")); 
        })
        .post((req,res)=>{
            const {id, pw} = req.body;
            const data = {id: id, pw: pw};
            this.fs.writeFile(this.path.join(__dirname,"../../assets/data/loginInfo.json"),JSON.stringify(data),(err)=>{
                if(err) throw err;
                res.render("login"); 
            });
        });
    }
    get joinRouter(){
        return this.router;
    }
    run(){
        super.run();
        this.getRoute();
    }
}
const joinRoute = new JoinRoute("joinRoute");
joinRoute.run();

module.exports = joinRoute.joinRouter;