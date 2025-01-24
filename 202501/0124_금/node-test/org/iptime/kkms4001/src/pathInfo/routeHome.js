const { route } = require("../modules/expressObj");

const routeHome = (req,res) => {
    res.send("Hello World ZARD");
}

module.exports = routeHome;