"use strict";
class Foo {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
const foo = new Foo("x", "y", "z");
// console.log(foo.x);
// console.log(foo.y);
// console.log(foo.z);
class Bar extends Foo {
    constructor(x, y, z) {
        super(x, y, z);
        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
    }
}
class Foo2 {
    constructor(x) {
        this.x = x;
    } // 이안에 자동으로 this.x가 생겼다고 보면됨.
}
const foo2 = new Foo2("Hello");
console.log(foo2);
console.log(foo2.x);
class Bar2 {
    constructor(x) {
        this.x = x;
    }
}
const bar2 = new Bar2("Hello");
console.log(bar2);
// console.log(bar2.x);
class Foo3 {
    constructor() {
        this.MAX_LEN = 5;
        this.MSG = "Hello";
    }
    log() {
        // this.MAX_LEN = 10;
        // this.MSG = "HI";
        console.log(`MAX_LEN: ${this.MAX_LEN}`);
    }
}
class Foo4 {
    constructor() {
        Foo4.instanceCounter++;
    }
}
Foo4.instanceCounter = 0;
const foo4 = new Foo4();
const foo5 = new Foo4();
console.log(Foo4.instanceCounter);
class Animal {
    move() {
        console.log(`roaming the earth ... `);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`bowwow~~`);
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
