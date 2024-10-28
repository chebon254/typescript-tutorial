// // Typescript uses strick types difference from javascript
// // String remains string, int int etc

// const character = "mario";

// console.log(character);

// const circ = (diameter) => {
//     return diameter * Math.PI;
// }

// console.log(circ(91));


// //Arrays
// let names = ['Kelvin', 'Kibet', 'Alan']

// names.push('Lulu');
// names.push('King');

// console.log(names);

// let mixed = [1, 'Lulu'] // Can allow both string and int due to mixed types


// //Objects
// let ninja = {
//     name: 'Mario',
//     belt: 'Black',
//     age: 30
// }

// ninja.name = 'Chebon'


// //Explicit Types - defining what dat will be stored y a variable
// let xter: string;
// let age_year: number;
// let isLogged: boolean;

// //Arrays
// //union types











// //Dynamic Types
// let age: any = 25;  // Any means you can chnage type

// age = true // Type boolean
// console.log(age);

// age = "Kelvin" // Type String
// console.log(age);

// age = "tsconfig"
// console.log(age);





// // Functions

// let greet: Function;

// // Later on we
// greet = () => {
//     console.log("Hello Kelvin");
    
// }

// // Type Aliases
// type NumWithString = number | string






// // Funtion Signatures
// let calc: (a: number, b: number, c:string) => number;

// calc = (numOne: number, numTwo: number, action: string) => {
//     if (action === 'add'){
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo
//     }
// }


// let logDetails: (obj: {name: string, age: number}) => void;

// logDetails = (ninja: {name: string,  age: number}) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
















// The DOM & Type casting - using ts to interact with DOM
















