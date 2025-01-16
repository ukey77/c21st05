class Queue<T>{
    protected data: Array<T> = [];
    push(item: T){
        this.data.push(item);
    }
    pop(): T | undefined{
        return this.data.shift();
    }
}

// 형선언할때 제네릭 타입이 들어가고
// 사용할땐 그냥

const numberQueue = new Queue<number>();
numberQueue.push(0);
numberQueue.push(+'1');

console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());
console.log(numberQueue.pop()?.toFixed());

const stringQueue = new Queue<string>();
stringQueue.push("Hello");
stringQueue.push("World");

console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());
console.log(stringQueue.pop()?.toUpperCase());

const myQueue = new Queue<{name: string, age: number}>();
myQueue.push({name: "Lee", age: 10});
myQueue.push({name: "Kim", age: 20});

console.log(myQueue.pop());
console.log(myQueue.pop());
console.log(myQueue.pop());

// == 함수 제네릭 ==
function reverse<T>(items: T[]): T[] {
    return items.reverse();
}

const arg = [1,2,3,4,5];
const reversed = reverse(arg);
console.log(reversed);