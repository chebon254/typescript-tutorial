// Typescript uses strick types difference from javascript
// String remains string, int int etc

const character = "mario";

console.log(character);

const circ = (diameter) => {
    return diameter * Math.PI;
}

console.log(circ(91));


//Arrays
let names = ['Kelvin', 'Kibet', 'Alan']

names.push('Lulu');
names.push('King');

console.log(names);

let mixed = [1, 'Lulu'] // Can allow both string and int due to mixed types


//Objects
let ninja = {
    name: 'Mario',
    belt: 'Black',
    age: 30
}

ninja.name = 'Chebon'


//Explicit Types - defining what dat will be stored y a variable
let xter: string;
let age_year: number;
let isLogged: boolean;

//Arrays
//union types