//对象类型

let person: {
    name: string;
    age: number;
    sayHi(): void;
    sayHello: ()=>void;
    greet(name: string): void
} = {
    name: "Alice",
    age: 30,
    sayHi() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    },
    sayHello: () => {
        console.log("Hello!");
    },
    greet(name) {
        console.log(`Hello, ${name}! My name is ${this.name}.`);
    }
};
person.sayHi(); // Hi, I'm Alice and I'm 30 years old.
person.sayHello(); // Hello!
person.greet("Bob"); // Hello, Bob! My name is Alice.
export {};