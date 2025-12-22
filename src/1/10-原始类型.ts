// js中有的基本数据类型，ts中都有
let myName:string = "John"
console.log(myName);

let isLoggedIn:boolean = true
console.log(isLoggedIn);

let a: null = null
console.log(a);

let b: undefined = undefined
console.log(b);

let s:symbol = Symbol("id")
console.log(s);

let age:number = 22
console.log(age);  

export {};
// ts-node ./src/1/10-原始类型.ts