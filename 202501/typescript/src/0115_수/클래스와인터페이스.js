"use strict";
// interface ITodo{
//     id: number;
//     content: string;
//     completed: boolean;
// }
Object.defineProperty(exports, "__esModule", { value: true });
class Todo2 {
    constructor(id, content, completed) {
        this.id = id;
        this.content = content;
        this.completed = completed;
    }
}
const todo2 = new Todo2(1, 'javascript', false);
console.log(todo2);
