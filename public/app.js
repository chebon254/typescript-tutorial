"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!; // Picks tags
const form = document.querySelector('.new-item-form'); // Picks tag using  classes(Casting)
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.valueAsNumber);
});
