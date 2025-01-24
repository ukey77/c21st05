class ExpressRouter {
    constructor() {
        this.express = require("express");
    }
    createExp() {
        return this.express.Router();
    }
}
const expRouter = new ExpressRouter();

module.exports = expRouter.createExp();