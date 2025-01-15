{interface IDuck { // 1
    quack(): void;
  }
  
  class MallardDuck implements IDuck { // 3
    quack() {
      console.log('Quack!');
    }
  }
  
  class RedheadDuck { // 4
    quack() {
      console.log('q~uack!');
    }
  }
  
  function makeNoise(duck: IDuck): void { // 2
    duck.quack();
  }
  
  makeNoise(new MallardDuck()); // Quack!
  makeNoise(new RedheadDuck()); // q~uack! // 5

  // == IPerson ==
  interface IPerson {
    name: string;
  }
  
  function sayHello(person: IPerson): void {
    console.log(`Hello ${person.name}`);
  }
  
  const myInfo = { name: 'Lee', age: 18 };
  sayHello(myInfo);
}