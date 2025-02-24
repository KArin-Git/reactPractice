The `export keyword` is used to export functions, objects, or primitive values from a module so they can be used in other modules.

There are two types of exports:
1. Named Exports: You can have `multiple named exports` in a single module.
    ```
    export const myFunction = () => {
        // function
    };
    
    export const myVariable = 42;
    ```
2. Default Exports: You can have `only one default export per module`.
    ```
    const myFunction = () => {
        // function
    };
    export default myFunction;
    ```

The `import keyword` is used to import functions, objects, or primitive values from other modules.

1. importing named exports
    ```
    import { myFunction, myVariable } from './module';
    ```

2. importing default exports
    ```
    import myFunction from './module';
    ```

3. importing all named exports
    ```
    import * as myModule from './module';

    // Usage
    myModule.myFunction();
    console.log(myModule.myVariable);
    ```

NOTE: it is common in React, `One component, One JS function` so it is common to `export default myFunction` since there are no other things to export in that file