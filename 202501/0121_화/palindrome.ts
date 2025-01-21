// class PalindromeControl{
//     protected id: string;
//     constructor(id: string){
//         this.id = id;
//     }
//     palindrome(data: string): string[]{
//         const dataArr: string[] = [...data];
//         const resultArr: string[] = [];
//         class Stack<T>{
//             protected id: string;
//             public storage: Array<T>;
//             constructor(id: string){
//                 this.id=id;
//                 this.storage = [];
//             }
//             pushItem(item: T){
//                 this.storage.push(item);
//             }
//             popItem(): T | undefined{
//                 return this.storage.pop();
//             }
//             get length(){
//                 const length = this.storage.reduce((acc,cur)=>{return acc+=1;},0);
//                 return length;
//             }
//         }
        
//         const stack: Stack<string>= new Stack<string>("stack");

//         dataArr.forEach((item)=>{
//             stack.pushItem(item);
//         });
        
//         while(stack.length > 0){
//             resultArr.push(stack.popItem());
//         }
//         this.outputResult(resultArr)
//     }
//     outputResult(resultArr: string[]){
//         const convertString = "".concat(...resultArr);
//         console.log(convertString);
//     }
//     run(data: string){
//         this.palindrome(data);
//     }
// }


// const palin: PalindromeControl = new PalindromeControl("palin");
// palin.run("ABCDEF");

// export {}