// typeof运算符

// 用法1: 使用typeof获取js变量类型并输出
console.log(typeof 123);

// 用法2: 在类型上下文中使用typeof获取ts变量类型作为参数类型,冒号后面就是类型上下文
let p = { x: 10, y: 20 };

function printPoint(point: typeof p) {
    console.log(`x: ${point.x}, y: ${point.y}`);
}

// typeof只能出现啊变量和属性的类型，不能查询函数参数的类型
console.log(typeof p.x);


export {};