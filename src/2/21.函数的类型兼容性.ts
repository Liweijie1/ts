// 参数少的函数可以赋值给参数多的函数，但相同位置的参数类型必须相同
type Fn1 = (a: number) => void;
type Fn2 = (a: number, b: string) => void;
type Fn3 = (a: string) => void;
let fn1: Fn1;
let fn2: Fn2;
let fn3: Fn3;
fn2 = fn1; // 结构类型兼容
// fn2 = fn3; // 报错，参数类型不兼容


let arr = ['1', '2', '3'];
// 结构类型兼容性：只要目标类型的成员在源类型中都能找到，类型就是兼容的
arr.forEach((item) => {});
arr.forEach((item,index) => {});
arr.forEach((item,index,array) => {});

// 函数的返回值类型兼容性
// 当返回值是对象时，返回值多的可以赋值给返回值少的
type Fn4 = () => ({name: string});
type Fn5 = () => ({name: string, age: number});
let fn4: Fn4;
let fn5: Fn5;
fn4 = fn5; // 结构类型兼容
// fn5 = fn4; // 报错，缺少age属性

// 当返回值是基本类型时，必须完全相同才能兼容
type Fn6 = () => string;
type Fn7 = () => string;
type Fn8 = () => void;
let fn6: Fn6;
let fn7: Fn7;
let fn8: Fn8;
fn6 = fn7; // 结构类型兼容
// fn6 = fn8; // 报错，void类型不能赋值给string类型
export {};

