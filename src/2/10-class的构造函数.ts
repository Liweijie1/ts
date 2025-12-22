//class的构造函数
class Person {
    age: number;
    name: string;
    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }
}
let person1 = new Person(25, "Alice");
console.log(person1.age,person1.name);

export {};