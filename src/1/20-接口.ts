//接口
//作用：为对象定义类型，规定对象的结构，方便复用
// 接口只能为对象定义类型，类型别名可以为任何类型定义类型
interface Person {
    name: string;
    age: number;
    greet(): void;
}
let user: Person = {
    name: "John",
    age: 25,    
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

user.greet(); // Hello, my name is John and I'm 25 years old.

let admin: Person = {
    name: "Admin",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
};

admin.greet(); // Hello, my name is Admin and I'm 30 years old.

export {};