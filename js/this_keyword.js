//this keyword

//Implicit binding
const person = {
    name: 'Jessé',
    sayMyName() {
        console.log(`My name is ${this.name}`);
    },
}

person.sayMyName();

//Explicit binding

function sayMyName() {
    console.log(`My name is ${this.name}`);
}

sayMyName.call(person); //the call method is used to bind the this keyword

//New binding
function Person(name) {
    this.name = name;
}

const person1 = new Person('Jessé');
const person2 = new Person('Johannes');

console.log(person1.name);
console.log(person2.name);

//Default binding
globalThis.name = 'Jessé';
sayMyName();

//Order of precedence
// 1. New binding
// 2. Explicit binding
// 3. Implicit binding
// 4. Default binding

