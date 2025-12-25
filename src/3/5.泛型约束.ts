// 泛型约束，如果没有约束，传入的类型就无法使用特定的属性或方法
// 主要有两种方式，一种是指定更加具体的类型，另一种是使用接口约束

// 1. 指定更加具体的类型
function id<Type>(value: Type[]): Type[] {
    console.log(`传入的值的length属性值${value.length}`);
    return value;
}
const arr = id<number>([1, 2, 3, 4]);

// 2. 使用接口约束
interface ILength {
    length: number;
}

// 传入的类型必须包含length属性
function logLength<Type extends ILength>(value: Type): Type {
    console.log(`传入的值的length属性值是${value.length}`);
    return value;
}
const strLen = logLength('hello world');
const objLen = logLength({ length: 10, value: 'test' }); // 传入一个有length属性的对象
// const numLen = logLength(123); // 报错，number类型没有length属性
export { };