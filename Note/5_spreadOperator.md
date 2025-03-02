The spread operator (...) in JavaScript allows you to expand elements of an iterable (like an array or object) into individual elements. It is useful for copying, merging, and spreading elements.

### Spread Operator with Arrays
### Copying Arrays
You can create a shallow copy of an array using the spread operator.
```
    const originalArray = [1, 2, 3];
    const copiedArray = [...originalArray];

    console.log(copiedArray); // Output: [1, 2, 3]
```

### Merging Arrays
You can merge multiple arrays into one.
```
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const mergedArray = [...array1, ...array2];

    console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

### Spread Operator with Objects
### Copying Objects
You can create a shallow copy of an object using the spread operator.
```
    const originalObject = { a: 1, b: 2 };
    const copiedObject = { ...originalObject };

    console.log(copiedObject); // Output: { a: 1, b: 2 }
```

### Merging Objects
You can merge multiple objects into one.
```
    const object1 = { a: 1, b: 2 };
    const object2 = { c: 3, d: 4 };
    const mergedObject = { ...object1, ...object2 };

    console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

EXAMPLE
ARRAYS
```
    const hobbies = ["Sports", "Cooking"];
    const newHobbies = ["Reading"];

    // Merging arrays
    const mergedHobbies = [...hobbies, ...newHobbies];
    console.log(mergedHobbies); // Output: ['Sports', 'Cooking', 'Reading']
```

OBJ
```
    const user = {
    name: "Arin",
    age: 31
    };

    // Extending an object
    const extendedUser = {
    isAdmin: true,
    ...user
    };
    console.log(extendedUser); // Output: { isAdmin: true, name: 'Arin', age: 31 }
```