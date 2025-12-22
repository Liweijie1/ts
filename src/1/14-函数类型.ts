//函数类型（参数类型和返回值类型）
//1.等待指定参数类型和返回值类型

// 函数声明方式定义函数类型
function add(x: number, y: number): number {
    return x + y;
}
console.log(add(2, 3));

// 函数表达式方式定义函数类型
const add2 = (x: number, y: number): number => {
    return x + y;
}
console.log(add2(5, 7));

//2.同时指定参数类型和返回值类型的完整写法
let add3: (x: number, y: number) => number = (x, y) => {
    return x + y;
};
console.log(add3(10, 15));
export { };