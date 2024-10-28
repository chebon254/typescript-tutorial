// Typescript uses strick types difference from javascript
// String remains string, int int etc
var character = "mario";
console.log(character);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(91));
//Arrays
var names = ['Kelvin', 'Kibet', 'Alan'];
names.push('Lulu');
names.push('King');
console.log(names);
var mixed = [1, 'Lulu']; // Can allow both string and int due to mixed types
//Objects
var ninja = {
    name: 'Mario',
    belt: 'Black',
    age: 30
};
ninja.name = 'Chebon';
//Explicit Types - defining what dat will be stored y a variable
var xter;
var age_year;
var isLogged;
//Arrays
//union types
