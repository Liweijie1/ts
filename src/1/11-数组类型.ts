// 数组类型
// 有两种定义数组的方式
// 1. 类型+方括号(推荐)
// 2. 泛型 Array<类型>
let a:number[] = [1,2,3,4]
console.log(a);

let b:Array<number> = [5,6,7,8]
console.log(b);

let c:boolean[] = [true,false,true]
console.log(c);

let d:Array<boolean> = [false,false,true]   
console.log(d);

export {};
// ts-node ./src/1/11-数组类型.ts