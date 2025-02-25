### Function Declarations
A function declaration defines a named function that can be called anywhere in the scope where it is defined.
    ```
    function myFunction() {
        console.log('This is a traditional function');
    }
    
    // Output: This is a traditional function
    myFunction();
    ```

### Arrow Functions
Arrow functions provide a shorter syntax for writing functions and do not have their own this, arguments, super, or new.target bindings. They are often used for shorter functions or as callbacks.
    ```
    const myArrowFunction = () => {
        console.log('This is an arrow function');
    };

    // Output: This is an arrow function
    myArrowFunction();
    ```

### Differences Between Function Declarations and Arrow Functions
1. Syntax: Arrow functions have a more concise syntax.
    ```
    // Traditional function
    function add(a, b) {
        return a + b;
    }

    // Arrow function
    const add = (a, b) => a + b;
    ```

2. this Binding: Arrow functions do not have their own this context; they inherit this from the parent scope.
    ```
    function Person() {
        this.age = 0;

        setInterval(function growUp() {
            this.age++;
        }, 1000);
    }

    const p = new Person();
    // `this` inside growUp refers to the global object, not the Person instance

    function Person() {
        this.age = 0;

        setInterval(() => {
            this.age++;
        }, 1000);
    }

    const p = new Person();
    // `this` inside the arrow function refers to the Person instance
    ```

3. Arguments Object: Arrow functions do not have their own arguments object.
    ```
    function traditionalFunction() {
        console.log(arguments);
    }

    traditionalFunction(1, 2, 3); // Output: [1, 2, 3]

    const arrowFunction = () => {
        console.log(arguments);
    };

    arrowFunction(1, 2, 3);
    // Output: ReferenceError: arguments is not defined
    ```

EXAMPLE
```
// Traditional function
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!

// Arrow function
const greetArrow = (name) => `Hello, ${name}!`;

console.log(greetArrow('Bob')); // Output: Hello, Bob!
```

### EXTRA NOTE
When working with Arrow Functions, you have a couple of "syntax shortcuts" available.

Most importantly, you should know about the following alternatives:

1) Omitting parameter list parentheses

If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

Instead of

`(userName) => { ... }`

you could write

`userName => { ... }`

Please note: 

If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

2) Omitting function body curly braces

If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

Instead of

```
number => { 
  return number * 3;
}
```

you could write

`number => number * 3;`

The following code would be invalid:

`number => return number * 3;` // invalid because return keyword must also be omitted!
`number => if (number === 2) { return 5 };` // invalid because if statements can't be returned

3) Special case: Just returning an object

If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

`number => { age: number }; // trying to return an object`
This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

`number => ({ age: number }); // wrapping the object in extra parentheses`
By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.