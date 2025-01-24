const path = require("path");
const routeJoin = (req,res) => {
    res.sendFile(path.join(__dirname,"../assests/htmls/join.html"));
}

module.exports = routeJoin;