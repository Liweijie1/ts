//类型推论
// 当没有明确指定类型时，TypeScript 会根据初始值推断出一个类型。
let message = "Hello, TypeScript!";

//如果声明时没有赋值，类型会被推断为 any，会根据后续赋值进行类型推断,但是不推荐这样做
// let a;
// a = 10; // 现在 a 被推断为 number
// a = "Now I'm a string"; // 现在 a 被推断为 string

console.log(message);
// console.log(a);
export {};