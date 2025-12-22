//字面量类型

let a = "hello"; // a的类型被推断为string
console.log(a);

const b = "world"; // b的类型被推断为字面量类型"world"
console.log(b);

let c: "typescript" = "typescript"; // c的类型被显式指定为字面量类型"typescript"
console.log(c);

// 字面量类型联合
function printDirection(direction: "up" | "down" | "left" | "right") {
    console.log(`Direction: ${direction}`);
}

printDirection("up"); // Direction: up
printDirection("down"); // Direction: down
// printDirection("forward"); // Error: Argument of type '"forward"' is not assignable to parameter of type '"up" | "down" | "left" | "right"'.

exports = {};