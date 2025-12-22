//接口继承

interface Animal {
    species: string;
    makeSound(): void;
}

// Dog接口继承自Animal接口
interface Dog extends Animal {
    breed: string;
    fetch(): void;
}

let myDog: Dog = {
    species: "Canis Lupus Familiaris",
    breed: "Golden Retriever",
    makeSound() {
        console.log("Woof! Woof!");
    },
    fetch() {
        console.log("Fetching the ball!");
    }   
};

myDog.makeSound(); // Woof! Woof!
myDog.fetch(); // Fetching the ball!

export {};