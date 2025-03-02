// Using Functions as Values with setTimeout
function handleTimeout() {
    console.log("Timed out!");
};

const handleTimeout2 = () => {
    console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("More timing out");
}, 4000);

// Assigning a Function to a Variable
const greet = function(name) {
    return `Hello, ${name}`;
};
console.log(greet("Arin"));

// Passing a Function as an Argument
function sayHello() {
    console.log("Hello!");
};
function executeCallback(callback) {
    callback();
};
executeCallback(sayHello);

// Returning a Function from Another Function
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
};
const sayHi = createGreeting("Hi");
console.log(sayHi("Arin"));

// Simple way
function greeter(greetFn) {
    greetFn();
};
greeter(() => console.log("Hiiii"));
// () => console.log("Hiiii") is greetFn