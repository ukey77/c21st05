"use strict";

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
    this.port = 3003;
  }

  _createClass(Daemon, [{
    key: "initSettings",
    value: function initSettings() {
      this.express = require("express");
      this.app = this.express();
      this.app.use(this.express["static"]("assets"));
      this.app.set("views", "./views");
      this.app.set("view engine", "pug");
      this.app.locals.pretty = true;
      this.app.use(this.express.json());
      this.app.use(this.express.urlencoded({
        extended: true
      }));
      this.listenPort();
    }
  }, {
    key: "listenPort",
    value: function listenPort() {
      var _this = this;

      this.app.listen(this.port, function () {
        console.log("http://localhost:".concat(_this.port));
      });
    }
  }, {
    key: "runRoute",
    value: function runRoute() {
      var _this2 = this;

      this.app.get("/", function (req, res) {
        res.send("<h1>Hello ".concat(_this2.port, "port Listen</h1>"));
      });
      this.app.get("/cute", function (req, res) {
        res.send("<img src=\"./images/cute.jpg\">");
      });
      this.app.get("/pug", function (req, res) {
        res.render("template", {
          title: "Test",
          hello: "Hello Pug World",
          date: Date()
        });
      });
      this.app.post("/sum", function (req, res) {
        console.log("value1", req.body.value1);
        console.log("value2", req.body.value2);
        res.render("sum", {
          title: "Summation",
          value1: Number(req.body.value1),
          value2: Number(req.body.value2)
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.initSettings();
      this.runRoute();
    }
  }]);

  return Daemon;
}();

var daemon = new Daemon("daemon");
daemon.run();