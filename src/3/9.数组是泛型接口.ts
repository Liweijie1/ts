// 数组是泛型接口的一个重要应用场景。数组是一种特殊的对象，其元素是按照顺序排列的，并且可以通过索引来访问。TypeScript 提供了多种方式来定义数组类型，其中最常用的是使用泛型接口 Array<T>。

const str = ['a', 'b', 'c'];
str.forEach(item => item); //(method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

const num = [1, 2, 3];
num.map(item => item); //(method) Array<number>.map<U>(callbackfn: (value: number, index: number, array: number[]) => U, thisArg?: any): U[]

export { };