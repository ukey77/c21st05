"use strict";
{
    class MallardDuck {
        quack() {
            console.log('Quack!');
        }
    }
    class RedheadDuck {
        quack() {
            console.log('q~uack!');
        }
    }
    function makeNoise(duck) {
        duck.quack();
    }
    makeNoise(new MallardDuck()); // Quack!
    makeNoise(new RedheadDuck()); // q~uack! // 5
    function sayHello(person) {
        console.log(`Hello ${person.name}`);
    }
    const myInfo = { name: 'Lee', age: 18 };
    sayHello(myInfo);
}
