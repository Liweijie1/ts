// readonly只读修饰符
// 作用:将对象属性设置为只读，防止在构造函数之外对属性进行修改。
// 注意：只要是readonly修饰的属性，在声明时如果不进行类型注解，则会被推断为字面量类型。
// readonly可以修饰类和接口和{}表示的对象类型中的属性。

class Person {
    readonly name: string = "Alice"; // 只读属性
    readonly age = 18; // 只读属性不加类型注解就会变成字面量类型
    constructor(name: string, age: number) {
        this.name = name; // 可以在构造函数中赋值
        // this.age = age; //不能将数字赋值给只读属性age，因为age已经被初始化为字面量类型18
    }
}

interface IPerson {
    readonly name: string;
}

let obj:{readonly id: number} = {id: 1};
export { };