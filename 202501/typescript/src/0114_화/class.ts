class Foo{
    public x: string;
    protected y: string;
    private z: string;
    constructor(x: string, y: string, z: string){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const foo = new Foo("x","y","z");
// console.log(foo.x);
// console.log(foo.y);
// console.log(foo.z);

class Bar extends Foo{
    constructor(x: string, y: string, z: string){
        super(x, y, z);

        console.log(this.x);
        console.log(this.y);
        // console.log(this.z);
    }
}

class Foo2{
    constructor(public x: string){}// 이안에 자동으로 this.x가 생겼다고 보면됨.
}

const foo2 = new Foo2("Hello");
console.log(foo2);
console.log(foo2.x);

class Bar2{
    constructor(private x: string){}
}

const bar2 = new Bar2("Hello");
console.log(bar2);
// console.log(bar2.x);

class Foo3{
    private readonly MAX_LEN: number = 5;
    private readonly MSG: string;
    constructor(){
        this.MSG = "Hello";
    }

    log(){
        // this.MAX_LEN = 10;
        // this.MSG = "HI";

        console.log(`MAX_LEN: ${this.MAX_LEN}`);
    }
}

class Foo4{
    static instanceCounter = 0;
    constructor(){
        Foo4.instanceCounter++;
    }
}

const foo4 = new Foo4();
const foo5 = new Foo4();

console.log(Foo4.instanceCounter);

abstract class Animal{
    abstract makeSound(): void;
    move(): void{
        console.log(`roaming the earth ... `);
    }
}

class Dog extends Animal{
    makeSound(){
        console.log(`bowwow~~`);
    }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();