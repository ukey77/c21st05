interface Todo{
    id: number;
    content: string;
    completed: boolean;
}

let todos: Todo[] = [];

function addTodo(todo: Todo){
    todos = [...todos, todo];
}

const newTodo: Todo = {id: 1, content: "typescript", completed: false};
const newTodo2: Todo = {id: 2, content: "javascript", completed: true};
addTodo(newTodo);
addTodo(newTodo2);
console.log(todos);

