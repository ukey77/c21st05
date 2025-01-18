"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
// Queue 클래스를 상속하여 number 타입 전용 NumberQueue 클래스를 정의
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // number 타입의 요소만을 push한다.
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue));
var queue = new NumberQueue();
queue.push(0);
queue.push(+'1'); // 실수를 사전 인지하고 수정할 수 있다
console.log(queue.pop().toFixed()); // 0
console.log(queue.pop().toFixed()); // 1
