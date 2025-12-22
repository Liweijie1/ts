//类型断言
//作用：告诉编译器“相信我，我知道自己在干什么”，用于手动指定一个值的类型。

// 类型断言有两种语法：
//1. as 语法（推荐使用这种）
//2. 尖括号语法（不推荐使用）
const aLink1 = document.getElementById("myLink") as HTMLAnchorElement;
console.log(aLink1.href); // 访问 href 属性，不会报错

const aLink2 = <HTMLAnchorElement>document.getElementById("myLink");
console.log(aLink2.href); // 访问 href 属性，不会报错
export {};