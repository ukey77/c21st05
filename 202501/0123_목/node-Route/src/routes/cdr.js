const express = require("express");
const router = express.Router();

router.route("/")
.get((req,res)=>{res.send("<h1>GET CDR</h1>")})
.post((req,res)=>{res.send("<h1>POST CDR</h1>")})

module.exports = router;
