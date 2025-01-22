"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor(id) {
        this.id = id;
        this.data = null;
    }
    url(address) {
        return (`http://localhost:3001${address}`);
    }
    $(element) {
        return document.querySelector(element);
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(this.url("/score"));
            const req = yield res.json();
            this.data = req;
            const dataObject = this.dataMetrics();
            this.displayDom(Object.assign({}, dataObject));
        });
    }
    displayDom(data) {
        for (const key in data) {
            // console.log(this.$(`#${key}`)
            const $input = this.$(`#${key}`);
            // $input.value = data[key];
        }
    }
    dataMetrics() {
        const dataLen = this.data.reduce((acc) => { return acc += 1; }, 0);
        const getAverage = () => {
            const sum = this.data.reduce((acc, cur) => {
                return acc += Number(cur["score"]);
            }, 0);
            return (sum / dataLen);
        };
        const scoreArray = this.data.map((value) => {
            return Number(value["score"]);
        });
        const maxScore = (data) => {
            return Math.max(...data);
        };
        const minScore = (data) => {
            return Math.min(...data);
        };
        const getStandardDeviation = (scoreArray.reduce((acc, cur) => {
            return acc += ((cur - getAverage()) ** 2);
        }, 0) / dataLen) ** (1 / 2);
        return {
            average: getAverage(),
            maxScore: maxScore(scoreArray),
            minScore: minScore(scoreArray),
            standardDeviation: Number(getStandardDeviation.toFixed(2))
        };
    }
    run() {
        this.getData();
    }
}
const score = new Score("score");
score.run();
