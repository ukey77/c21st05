"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PalindromeControl {
    constructor(id) {
        this.id = id;
    }
    palindrome(data) {
        const dataArr = [...data];
        const resultArr = [];
        class Stack {
            constructor(id) {
                this.id = id;
                this.storage = [];
            }
            pushItem(item) {
                this.storage.push(item);
            }
            popItem() {
                return this.storage.pop();
            }
            get length() {
                const length = this.storage.reduce((acc, cur) => { return acc += 1; }, 0);
                return length;
            }
        }
        const stack = new Stack("stack");
        dataArr.forEach((item) => {
            stack.pushItem(item);
        });
        while (stack.length > 0) {
            resultArr.push(stack.popItem());
        }
        this.outputResult(resultArr);
    }
    outputResult(resultArr) {
        const convertString = "".concat(...resultArr);
        console.log(convertString);
    }
    run(data) {
        this.palindrome(data);
    }
}
const palin = new PalindromeControl("palin");
palin.run("ABCDEF");
