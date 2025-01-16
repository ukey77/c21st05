"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World\uD83C\uDF45\u2600\uFE0F\u2B50</h1>");
});
app.listen(2000, function () {
  console.log("Connected Daemon 2000port!");
});