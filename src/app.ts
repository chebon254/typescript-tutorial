// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

// const form = document.querySelector('form')!; // Picks tags
const form = document.querySelector('.new-item-form') as HTMLFormElement; // Picks tag using  classes(Casting)

const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.valueAsNumber
    );
    
})