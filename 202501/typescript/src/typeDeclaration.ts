//object
const obj: object = {};

// array
let list1: any[] = [1, 'two', true];
let list: number[] = [1,2,3];
let list3: Array<number> = [1,2,3]// 제네릭 배열 타입

// tuple: 고정된 요소수 만큼의 타입을 미리 선언 후 배열 표현
let tuple: [string, number];
tuple = ["hello", 10];

// enum: 열거형은 숫자 값 집합에 이름을 지정한 것.
enum Color1{Red, Green, Blue};
let c1: Color1 = Color1.Green;
console.log(c1); // 1

// void: 일반적으로 함수에서 반환값이 없을 경우 사용함.
function warnUser(): void{
    console.log("This is my warning message");
}
//never: 결코 발생하지 않는 값
// function infiniteLoop(): never{
//     while(true){}
// }

// function error(message: string): never{
//     throw new Error(message);
// }

let primitiveStr: string;
primitiveStr = "hello";
// primitiveStr = new String("hello");

// const elem: HTMLElement = document.getElementById("myId");

const $input = document.querySelector("input[type=`text`]") as HTMLInputElement;
const $input2 = <HTMLInputElement>document.querySelector('input[type="text"]');