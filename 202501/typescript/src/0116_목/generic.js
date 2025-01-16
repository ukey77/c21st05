"use strict";
var _a, _b, _c, _d, _e, _f;
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
// 형선언할때 제네릭 타입이 들어가고
// 사용할땐 그냥
const numberQueue = new Queue();
numberQueue.push(0);
numberQueue.push(+'1');
console.log((_a = numberQueue.pop()) === null || _a === void 0 ? void 0 : _a.toFixed());
console.log((_b = numberQueue.pop()) === null || _b === void 0 ? void 0 : _b.toFixed());
console.log((_c = numberQueue.pop()) === null || _c === void 0 ? void 0 : _c.toFixed());
const stringQueue = new Queue();
stringQueue.push("Hello");
stringQueue.push("World");
console.log((_d = stringQueue.pop()) === null || _d === void 0 ? void 0 : _d.toUpperCase());
console.log((_e = stringQueue.pop()) === null || _e === void 0 ? void 0 : _e.toUpperCase());
console.log((_f = stringQueue.pop()) === null || _f === void 0 ? void 0 : _f.toUpperCase());
const myQueue = new Queue();
myQueue.push({ name: "Lee", age: 10 });
myQueue.push({ name: "Kim", age: 20 });
console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());
// == 함수 제네릭 ==
function reverse(items) {
    return items.reverse();
}
const arg = [1, 2, 3, 4, 5];
const reversed = reverse(arg);
console.log(reversed);
