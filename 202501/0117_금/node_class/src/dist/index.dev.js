"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Daemon =
/*#__PURE__*/
function () {
  function Daemon(id) {
    _classCallCheck(this, Daemon);

    this.id = id;
    this.express = null;
    this.app = null;
  }

  _createClass(Daemon, [{
    key: "setDaemon",
    value: function setDaemon() {
      this.express = require("express");
      this.app = this.express();
      this.app.set("view engine", "pug");
      this.app.set("views", "./views");
      this.app.use(this.express["static"]("public"));
    }
  }, {
    key: "runRoute",
    value: function runRoute() {
      this.app.get("/", function (req, res) {
        res.send("Hello Root");
      });
      this.app.get("/img", function (req, res) {
        res.send("<h1>Good Bye</h1><img src=\"./images/bye.png\">");
      });
      this.app.get("/dynamic", function (req, res) {
        var list = _toConsumableArray(new Array(5)).reduce(function (acc, cur, i) {
          return acc + "<li>HelloWorld".concat(i + 1, "</li>");
        }, "");

        res.send(list);
      });
      this.app.get("/template", function (req, res) {
        res.render("template", {
          title: "Template",
          time: Date()
        });
      });
      this.app.get("/option", function (req, res) {
        var select = req.query.select;
        console.log(req.query.select);
        res.send(select);
      });
    }
  }, {
    key: "listen",
    value: function listen() {
      this.app.listen(2000, function () {
        console.log("http://localhost:2000");
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.setDaemon();
      this.runRoute();
      this.listen();
    }
  }]);

  return Daemon;
}();

var main = function () {
  var daemon = new Daemon();
  daemon.run();
}();