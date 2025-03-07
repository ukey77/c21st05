const Daemon = require("./daemon");

//  == WebService ==
class WebService extends Daemon{
    constructor(id){
        super(id);
    }
    runDaemon(){
        this.app.use("/",require("./routes/index"));
        this.app.use("/join",require("./routes/join"));
        this.app.use("/login",require("./routes/login"));
    }
    listen(){
        const port = 3000;
        this.app.listen(port,()=>{
            console.log(`http://localhost:${port}`);
        });
    }
    run(){
        super.run();
        this.listen();
        this.runDaemon();
    }
}

const service = new WebService("service");
service.run();
