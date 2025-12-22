// 类型兼容性
// 结构化类型系统: 只要两个类型的内部结构相似，那么它们就是兼容的

// 类之间的兼容性
class Point{x:number;y:number;}
class Point2{x:number;y:number;}

let p1:Point = new Point2(); // 结构类型兼容
console.log(p1);


// 成员多的可以赋值给成员少的
class Point3{x:number;y:number;z:number;}
let p2:Point = new Point3(); // 结构类型兼容
console.log(p2);

// 接口之间的兼容性
interface Animal{
    name:string;
}
interface Animal2{
    name:string;
}
interface Dog{
    name:string;
    breed:string;
}

let a1:Animal;
let a2:Animal2;
let a3:Dog;
a1 = a2; // 结构类型兼容
a1 = a3; // 结构类型兼容
console.log(a1);


export { };