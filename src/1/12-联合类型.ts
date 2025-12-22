// 联合类型
// 联合类型表示一个值可以是几种类型之一
// 使用 | 分隔每个类型

let arr:(number|string)[] = [1,'2',3,'4'];
console.log(arr);

let value:number|string;
value = 123;
console.log(value);

let value2:number|boolean[] = [true,false];
console.log(value2);
export{};