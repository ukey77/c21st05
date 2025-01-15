"use strict";
let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: "typescript", completed: false };
const newTodo2 = { id: 2, content: "javascript", completed: true };
addTodo(newTodo);
addTodo(newTodo2);
console.log(todos);
