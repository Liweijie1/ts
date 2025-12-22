// any类型 （不推荐使用）
let obj: any = {x:0};
obj.foo(); // 运行时不会报错，但编译时也不会检查
obj();    // 运行时不会报错，但编译时也不会检查
obj.bar = 100; // 运行时不会报错，但编译时也不会检查
// let a; // 隐式为any类型
// function handleData(data) { // data隐式为any类型
//     return data;
// }
export {};