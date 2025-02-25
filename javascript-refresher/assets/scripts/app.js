const user = {
    name: "Arin",
    age: 30,
    // method
    greet() {
        console.log("Hello " + this.name);
    }
};

console.log(user);
console.log("age is: " + user.age);
user.greet();

class User {
    constructor(nanme, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi");
    }
}

const user1 = new User("John", 25);
console.log(user1);
user1.greet();