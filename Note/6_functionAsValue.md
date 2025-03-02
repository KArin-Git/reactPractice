In JavaScript, functions can be assigned to variables, passed as arguments to other functions, and returned from functions. This makes functions first-class citizens in JavaScript. Here are some examples of using functions as values:

### Assigning a Function to a Variable
You can assign a function to a variable, which allows you to call the function using that variable.
```
    const greet = function(name) {
        return `Hello, ${name}`;
    };
    console.log(greet("Arin")); // Output: Hello, Arin!
```

### Passing a Function as an Argument
You can pass a function as an argument to another function. This is commonly used with callback functions.
```
    function sayHello() {
        console.log("Hello!");
    };
    function executeCallback(callback) {
        callback();
    };
    executeCallback(sayHello); // Output: Hello!
```

### Returning a Function from Another Function
You can return a function from another function, which allows you to create higher-order functions.
```
    function createGreeting(greeting) {
        return function(name) {
            return `${greeting}, ${name}!`;
        };
    };
    const sayHi = createGreeting("Hi");
    console.log(sayHi("Arin")); // Output: Hi, Arin!
```


### Using Functions as Values with setTimeout
The setTimeout function takes a callback function as its first argument and a delay in milliseconds as its second argument. The callback function is executed after the specified delay.
```
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
```