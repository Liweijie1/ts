interface IdFunc<T> {
    id:(value: T) => T;
    ids: () => T[];
}

// 使用泛型接口时，必须要显示指定具体的类型参数。
let obj: IdFunc<number> = {
    id(value){
        return value;
    },
    ids(){
        return [1,2,3];
    }
};

console.log(obj.id(10));
console.log(obj.ids());

export { };