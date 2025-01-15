interface UserInfo{
    username: string;
    password: string;
    age? :number; // ?(0또는 1 == 없거나 있거나) 선택적프로퍼티
    address? :string;
}

// const userInfo: UserInfo = {
//     username: "ujin1234@gmail.com",
//     password: "123456"
// }

// console.log(userInfo);

interface AddInfo extends UserInfo{
    grade: number;
}

const Student: AddInfo = {
    username: "KIM",
    password: "123456",
    grade: 3
}

// console.log(Student);
interface Person {
    name: string;
    age?: number;
  }
  
  interface Developer {
    skills: string[];
  }
  
interface WebDeveloper extends Person, Developer{}

const webDeveloper: WebDeveloper = {
    name: 'Lee',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript']
}
console.log(webDeveloper);