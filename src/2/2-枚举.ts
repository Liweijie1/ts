//枚举 （一般情况下，推荐使用字面量加联合类型代替枚举，不推荐使用枚举）
//定义一组命名的常量
//枚举有默认值，默认从0开始自增，也可以手动赋值
enum Direction {
    Up,
    Down = 100,
    Left,
    Right
}

function changeDirection(direction: Direction) {
    console.log(direction);
}

changeDirection(Direction.Up); // 输出 0
changeDirection(Direction.Down); // 输出 100

//字符串枚举没有自增行为，每个成员必须手动赋值
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction2);

export {};