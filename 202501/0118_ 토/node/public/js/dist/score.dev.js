"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var Score =
/*#__PURE__*/
function () {
  function Score(id) {
    _classCallCheck(this, Score);

    this.id = id;
    this.data = null;
  }

  _createClass(Score, [{
    key: "url",
    value: function url(address) {
      return "http://localhost:3001".concat(address);
    }
  }, {
    key: "$",
    value: function $(element) {
      return document.querySelector(element);
    }
  }, {
    key: "getData",
    value: function getData() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var res, req, dataObject;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(this.url("/score"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                req = _context.sent;
                this.data = req;
                dataObject = this.dataMetrics();
                this.displayDom(Object.assign({}, dataObject));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "displayDom",
    value: function displayDom(data) {
      for (var key in data) {
        console.log(this.$("#".concat(key)));
        this.$("#".concat(key)).value = data[key];
      }
    }
  }, {
    key: "dataMetrics",
    value: function dataMetrics() {
      var _this = this;

      var dataLen = this.data.reduce(function (acc) {
        return acc += 1;
      }, 0);

      var getAverage = function getAverage() {
        var sum = _this.data.reduce(function (acc, cur) {
          return acc += Number(cur["score"]);
        }, 0);

        return sum / dataLen;
      };

      var scoreArray = this.data.map(function (value) {
        return Number(value["score"]);
      });

      var maxScore = function maxScore(data) {
        return Math.max.apply(Math, _toConsumableArray(data));
      };

      var minScore = function minScore(data) {
        return Math.min.apply(Math, _toConsumableArray(data));
      };

      var getStandardDeviation = Math.pow(scoreArray.reduce(function (acc, cur) {
        return acc += Math.pow(cur - getAverage(), 2);
      }, 0) / dataLen, 1 / 2);
      return {
        average: getAverage(),
        maxScore: maxScore(scoreArray),
        minScore: minScore(scoreArray),
        standardDeviation: Number(getStandardDeviation.toFixed(2))
      };
    }
  }, {
    key: "run",
    value: function run() {
      this.getData();
    }
  }]);

  return Score;
}();

var score = new Score("score");
score.run();