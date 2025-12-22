//实现接口
interface Singale{
    name:string;
    sing():void;
}

class Person implements Singale{
    name = "张三";
    sing(): void {
        console.log("唱歌");    
    }
}

let p = new Person();
p.sing(); // 唱歌
export {};