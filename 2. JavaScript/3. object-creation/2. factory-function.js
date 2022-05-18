function makePerson(name, age, hobbies) {
  const obj = {
    name: name,
    age: age,
    hobbies: hobbies,
    greet: function () {
      return `Hallo, ik ben ${this.name} en ik ben ${this.age} jaar oud.`; //string interpolation ${}
    },
  };
  return obj;
}

const person1 = makePerson("Els", 28, ["zwemmen", "voetbal"]);
const person2 = makePerson("David", 41, ["spelen", "tennis", "badminton"]);
console.log(person1);
console.log(person2);
// let nrOfPersons = 10000;
// const allPersons = [];
// while(nrOfPersons--){
//     allPersons.push(makePerson("Els", 28, ["spelen", "badminton"]))
// }
// console.log(person1.greet());
// console.log(person2.greet());
