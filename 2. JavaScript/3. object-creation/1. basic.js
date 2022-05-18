// object maken
const person = {
  name: "David",
  age: 41,
  hobbies: ["zwemmen", "spelen", "voetbal"],
  greet: function () {
    return `Hallo, ik ben ${this.name} en ik ben ${this.age} jaar oud.`; //string interpolation ${}
  },
};
console.log(person.greet());
// console.log(person);
// for(person of people) => pople[]
// for (let prop in person) {
//   console.log(prop, person[prop]);
// }

// twee people - 2 personen => class
// want is niet efficient

const person2 = {
  name: "Els",
  age: 28,
  hobbies: ["spelen", "badminton"],
  greet: function () {
    return `Hallo, ik ben ${this.name} en ik ben ${this.age} jaar oud.`;
  },
};
console.log(person2.greet());
