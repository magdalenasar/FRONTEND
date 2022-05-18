// Object Challenges

// CHALLENGE 1:
// Make a class Person
// - give it the following properties
// name, pet
// - create 5 instances of person and show the five pets in the console.

class Person {
  constructor(name, pet) {
    this.name = name; // opslaan in zijn obj
    this.pet = pet;
  }
}

// 5 maken:
const person1 = new Person("Jos", "Minou");
const person2 = new Person("Jos", "Toti");
const person3 = new Person("Jos", "Titus");
const person4 = new Person("Jos", "Luke");
const person5 = new Person("Jos", "Lune");

const allPersons = [person1, person2, person3, person4, person5];

allPersons.forEach(personObj => console.log(personObj.pet));

for (let i = 0; i < allPersons.length; i++) {
  console.log(allPersons[i].pet);
}

for (let person of allPersons) {
  console.log(person.pet);
}

// console.log(person1.pet);
// console.log(person2.pet);
// console.log(person3.pet);
// console.log(person4.pet);
// console.log(person5.pet);
