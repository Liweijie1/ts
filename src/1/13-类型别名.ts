//类型别名
//当同一个类型需要多次使用时，可以使用类型别名为其指定一个名称，方便后续引用。
//使用 type 关键字来创建类型别名，语法如下：3

// type 别名 = 类型;

// 示例：
// 数字和字符串的联合数组类型
type CustomArray = (number | string)[]

let arr: CustomArray = [1, '2', 3, '4'];
console.log(arr);

let b: CustomArray = ['a', 'b', 2, 3];
console.log(b);

// 函数类型
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name: string) => {
    return `Hello, ${name}!`;
};


console.log(greet("Alice"));  // "Hello, Alice!"
export {};