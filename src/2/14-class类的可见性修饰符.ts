//class类的可见性修饰符
// protected 受保护的  受保护成员可以在对其声明的类和子类中访问，但不能在类的外部(实例对象)访问
// private 私有的  私有成员只能在对其声明的类的内部访问
// public 公有的  公有成员可以被任何地方访问，默认所有成员都是public，所以可以省略不写

// 父类
class Animal {
    protected sleep() {
        console.log('睡觉');
    }

    private run() {
        console.log('跑步');
    }
    public move() {
        console.log('走两步');
        this.sleep(); // 在类的内部可以访问protected方法
        this.run();   // 在类的内部可以访问private方法
    }

}

// 子类
class Dog extends Animal {
    bark() { // 默认是public
        console.log('汪汪汪');
        this.sleep(); // 在子类中可以访问protected方法
        // this.run(); // 错误：不能在子类中访问private方法
    }
}

const dog = new Dog();
dog.move(); // 访问父类的public方法
console.log("=====");

dog.bark(); // 访问子类的public方法
// dog.sleep(); // 错误：不能在类的外部访问protected方法
// dog.run();   // 错误：不能在类的外部访问private方法
export { };