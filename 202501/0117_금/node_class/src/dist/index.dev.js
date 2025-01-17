"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var express = require("express");

var app = express();
app.use(express["static"]("public")); // public 폴더 내 정적 파일 서빙

app.set("views", "./views"); // 템플릿 파일 경로

app.set("view engine", "pug"); // 템플릿 엔진으로 pug 설정

app.locals.pretty = true; // 개발 환경에서 HTML 출력 정리

app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/dynamic", function (req, res) {
  var list = _toConsumableArray(new Array(5)).reduce(function (acc, cur) {
    return acc + "<li>Beautiful Coding</li>";
  }, "");

  res.send(list);
});
app.get("/template", function (req, res) {
  res.render("template", {
    loverName: "Yujin"
  });
});
app.get("/option", function (req, res) {
  var nameList = ["111", '222', '3333'];
  res.send(nameList[req.query.select]);
});
app.listen(3000, function () {
  console.log("http://localhost:3000");
});