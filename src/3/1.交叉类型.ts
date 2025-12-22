interface Person {
    name: string;
    sayHello(): void;
}
interface Contact {
    phone: string;
}

// 交叉类型，将多个类型合并为一个类型，类似于接口的多重继承
type PersonDetails = Person & Contact;

const person: PersonDetails = {
    name: "John Doe",
    phone: "123-456-7890",
    sayHello() {
        console.log(`Hello, my name is ${this.name} and my phone number is ${this.phone}.`);
    }
};

console.log(person.name);
console.log(person.phone);
person.sayHello();

// 交叉类型和接口的区别在于对同名属性的处理方式：
// 1. 接口继承时，如果多个接口有同名属性且类型不兼容，会导致错误。
// 2. 交叉类型则会将同名属性的类型合并为一个联合类型。

interface A {
    name: string;
    fn: (value: number) => void;
}
// interface B extends A {
//     age: number;
//     fn: (value: string) => string;// 报错，类型不兼容,因为A中的fn参数类型是number,这里是string
// }
interface B {
    age: number;
    fn: (value: string) => void;
}

type C = A & B;

let c: C = {
    name: "Example",
    age: 30,
    fn (value: string | number) {
        console.log(value);
    }
};

c.fn(42);
c.fn("Hello");

type D = A | B; // D 的类型为 A 或 B


export { };