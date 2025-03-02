Destructuring in function parameters allows you to directly extract values from objects or arrays passed as arguments to the function. This can make your code more concise and readable.

### Destructuring Objects in Function Parameters
When you pass an object to a function, you can destructure its properties directly in the function parameter list.

EXAMPLE
```
    const user = {
        name: "Arin",
        age: 31,
        location: "ON"
    };

    function printUser({ name, age, location }) {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Location: ${location}`);
    }

    printUser(user);
    // Output:
    // Name: Arin
    // Age: 31
    // Location: ON
```
In this example, the printUser function takes an object as an argument and destructures it into name, age, and location variables directly in the parameter list.

### Destructuring Arrays in Function Parameters
Similarly, you can destructure arrays in function parameters.

EXAMPLE
```
    const userNameData = ["Arin", "Apichitchon"];

    function printNames([firstName, lastName]) {
        console.log(`First Name: ${firstName}`);
        console.log(`Last Name: ${lastName}`);
    }

    printNames(userNameData);
    // Output:
    // First Name: Arin
    // Last Name: Apichitchon
```
In this example, the printNames function takes an array as an argument and destructures it into firstName and lastName variables directly in the parameter list.

### Combining Destructuring with Default Parameters
You can also combine destructuring with default parameters to provide default values for function parameters.

EXAMPLE
```
    function printUser({ name = "Unknown", age = 0, location = "Unknown" } = {}) {
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Location: ${location}`);
    }

    printUser({ name: "Arin", age: 31 });
    // Output:
    // Name: Arin
    // Age: 31
    // Location: Unknown

    printUser();
    // Output:
    // Name: Unknown
    // Age: 0
    // Location: Unknown
```

In this example, the printUser function provides default values for name, age, and location if they are not provided in the argument object. The function also provides a default empty object {} to handle cases where no argument is passed.

Destructuring in function parameters is a powerful feature that can help you write cleaner and more concise code.