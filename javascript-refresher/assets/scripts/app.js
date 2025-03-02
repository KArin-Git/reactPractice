// const userNameData = ["Arin", "Apichitchon"];
// const firstName = userNameData[0];
// const lastName = userNameData[1];

// left-side => destructor the array
const [firstName, lastName] = ["Arin", "Apichitchon"];
console.log(firstName);
console.log(lastName);

// MARKME: second
const user = {
    name: "Arin",
    age: 31
};

// const name = user.name
// console.log(name);

// MARKME: obj's pull out from the property's name but we can use a alias with :
const {name: userName, age, locate} = {
    name: "Arin2",
    age: 32,
    locate: "ON"
};

console.log(userName);
console.log(locate);