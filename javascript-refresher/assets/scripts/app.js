const hobbies = ["Sports", "Cooling"];
const user = {
    name: "Arin",
    age: 31
};

const newHobbies = ["Reading"];

// array inside array
const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies);
/*
    the result is array inside array
    [Array(2), Array(1)]  
    0 : Array(2)
        0 : "Sports"
        1 : "Cooling"
        length : 2
    1 : Array(1)
        0 : "Reading"
        length : 1
    length : 2
*/

// spread operator
const mergedHobbies2 = [...hobbies, ...newHobbies];
console.log(mergedHobbies2);
/*
    ['Sports', 'Cooling', 'Reading']
    0 : "Sports"
    1 : "Cooling"
    2 : "Reading"
    length : 3
*/

// Object
const extendedUser = {
    isAdmin: true,
    ...user
};
console.log(extendedUser);
/*
    {isAdmin: true, name: 'Arin', age: 31}
        age : 31
        isAdmin : true
        name : "Arin"
*/