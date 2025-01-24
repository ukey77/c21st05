class ExpressObj {
    constructor() {
        this.express = require("express");
    }
    createExp() {
        return this.express();
    }
}
const expressObj = new ExpressObj();

module.exports = expressObj.createExp();