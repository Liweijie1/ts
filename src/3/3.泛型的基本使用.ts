// 泛型的基本使用
// 语法function ：函数名<类型变量>(参数: 类型变量): 类型变量 {}
// 类型变量可以理解为一个占位符，代表任意类型，在使用函数时再指定具体的类型。

function id<Type>(value: Type): Type {
    return value;
}
const num = id<number>(123);
const str = id<string>('hello');
const bool = id(true); // 类型推断，自动推断为boolean类型
console.log(num);// 123
console.log(str);// hello
console.log(bool);// true

export { };