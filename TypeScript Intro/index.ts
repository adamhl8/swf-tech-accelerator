import getPeople from "./library.js";

const people = await getPeople();
const person1 = people.person1.firstName;
const person3 = people.person3.firstName;

console.log(person3);
