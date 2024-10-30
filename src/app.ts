// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

// const form = document.querySelector('form')!; // Picks tags
// const form = document.querySelector('.new-item-form') as HTMLFormElement; // Picks tag using  classes(Casting)

// const type = document.querySelector('#type') as HTMLFormElement;
// const tofrom = document.querySelector('#tofrom') as HTMLFormElement;

// form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();

//     console.log(
//         type.value,
//         tofrom.valueAsNumber
//     );
    
// })








import { Invoice } from './classes/Invoice.js'




const invoiceOne = new Invoice('Mario', 'work on website', 250);
const invoiceTwo = new Invoice('Chebon', 'work on website', 50);

console.log(invoiceOne, invoiceTwo);

let invoices: Invoice[] = []

// Access Modifiers: private, public, readonly




// Interfaces





