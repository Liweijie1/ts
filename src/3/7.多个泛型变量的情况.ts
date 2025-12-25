// 多个变量约束

// keyof 关键字表示某个类型的所有键组成的联合类型
// 接收一个对象和一个该对象的键，返回该键对应的值
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}
const person = { name: 'Alice', age: 30, city: 'New York' };

const personName = getProperty(person, 'name');
// const personName2 = getProperty(person, 'name2);// 报错，'name2'不是person对象的键
console.log(personName); // Alice

// 一般不会去获取基本类型的属性，一般用于获取对象的属性，但其实也可以获取基本类型的属性
const num = getProperty(12, 'toFixed'); // [Function: toFixed]
console.log(num);

export { };