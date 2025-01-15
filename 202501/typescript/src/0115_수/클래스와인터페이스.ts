// interface ITodo{
//     id: number;
//     content: string;
//     completed: boolean;
// }

// class Todo implements ITodo{
//     constructor(
//         public id: number,
//         public content: string,
//         public completed: boolean
//     ){}
// }

// const todo = new Todo(1,'Typescript',false);
// console.log(todo)

interface ITodo{
    id: number;
    content: string;
    completed: boolean;
}

class Todo2 implements ITodo{
    constructor(
        public id: number,
        public content: string,
        public completed: boolean
    ){}
}

const todo2 = new Todo2(1,'javascript',false);
console.log(todo2);

// === IPerson interface 정의 ===
interface IPerson{
    name: string;
    sayHello(): void; // return값이 없는 함수
}

// 인터페이스를 구현하는 클래스는 인터페이스에서 정의한 프로퍼티와 추상 메소드를 반드시 구현하여야한다.

// class Person implements IPerson{
//     constructor(
//         public name: string
//     ){}
//     sayHello(){
//         console.log(`Hello ${this.name}`);
//     }
// }

// function greeter(person: IPerson): void{
//     person.sayHello();
// }
// const me = new Person("KIM");
// greeter(me);
export {}