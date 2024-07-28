//hoisting and scoping


//Hoisting

console.log(myFunc());

function myFunc() {
    return "Hello";
}

const myConst = 10;

console.log(myConst)

//Scoping

// myFunc2()

let myVar = "global";

 let myFunc2 = () => {
    let myVar = "local";
    console.log(myVar)
}


console.log(myVar) // global


// let and const

let myConst2 = "constant";

myConst2 = "new constant";

console.log(myConst2);

const myConst3 = {
    name: "John"
}

myConst3.name = "Jane";
myConst3.value = "4"

console.log(myConst3.value);

const myArr1 = [1, 2, 3, 4]

myArr1.push(5)

console.log(myArr1)

// Block scope


// Arrow function

const myFunc3 = () => {
    console.log("Hello from arrow function")
}

myFunc3()

// Template literals

const name = "John";
const age1 = 30;

console.log('Hello, my name"s is " + name + " and I am " + age + " years old.');

console.log(`Hello, my name is ${name} and I am ${age1} years old.`);


// Destructuring

const myObj = {
    FirstName: "John",
    lastName: "Doe",
    age: 30
}

const { FirstName, age , lastName} = myObj;

console.log(FirstName, lastName, age)

// Spread operator

const myArr2 = [1, 2, 3, 4];
const myArr3 = [...myArr2, 5, 6];

console.log(myArr3);

// Rest operator

function sumAll(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// m r f gets applied on arrays

console.log(sumAll(...myArr3));





























