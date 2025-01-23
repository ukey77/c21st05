const Daemon = require("../daemon.js");

class MainRoute extends Daemon{
    constructor(id){
        super(id);
    }
    getRoute(){
        this.router.route("/")
        .get((req,res)=>{
            res.send(`<h1>Welcome ${this.port}Port Sever</h1>`);
        });
    }
    get mainRouter(){
        return this.router;
    }
    run(){
        super.run();
        this.getRoute();
    }
}

const mainRoute = new MainRoute("mainRoute");
mainRoute.run();

module.exports = mainRoute.mainRouter;