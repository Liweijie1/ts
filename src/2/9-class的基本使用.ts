//class的基本使用

class Person {
    age: number;
    gender = '男'; //类型推断为string
}
let person1 = new Person();
console.log(person1 instanceof Person); // true

export {};