"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Route =
/*#__PURE__*/
function () {
  function Route(id) {
    _classCallCheck(this, Route);

    this.id = id;
    this.port = 3000;
    this.express = null;
    this.app = null;
  }

  _createClass(Route, [{
    key: "daemonReady",
    value: function daemonReady() {
      var _this = this;

      this.express = require("express");
      this.app = this.express(); // == static == (use)

      this.app.use(this.express["static"]("public")); // == pug view engine == (set)

      this.app.set("views", "./views");
      this.app.set("view engine", "pug"); // === body-parser ===

      /* 
      body-parser가 express에 내장된 이후로, 별도로 설치하지 않고도 express에서 제공하는
      미들웨어인 express.json과 express.urlencoded()를 사용할 수 있습니다.
      */
      // == body-parser == (use)

      this.app.use(this.express.json());
      this.app.use(this.express.urlencoded({
        extended: true
      })); // 원래는
      // this.bodyParser = require("body-parser");
      // this.app.use(this.bodyParser.urlencoded({extended: true}));

      this.app.listen(this.port, function () {
        console.log("http://localhost:".concat(_this.port));
      });
    }
  }, {
    key: "runRoute",
    value: function runRoute() {
      this.app.get("/", function (req, res) {
        res.send("Hello World");
      });
      this.app.get("/pug", function (req, res) {
        var scoreData = {
          average: "평균",
          maxScore: "최고점",
          minScore: "최저점",
          standardDeviation: "표준편차"
        };
        res.render("score", {
          title: "Score Display",
          scoreData: scoreData
        });
      });
      this.app.get("/img", function (req, res) {
        res.send("<img src='./images/bye.png'>");
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.daemonReady();
      this.runRoute();
    }
  }]);

  return Route;
}();

var daemon = new Route("daemon");
module.exports = daemon;