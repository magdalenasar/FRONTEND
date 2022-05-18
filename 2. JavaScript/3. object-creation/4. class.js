class Person {
  constructor(name, age, hobbies, nickName = "unknown") {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.nickName = nickName;
  }
  greet() {
    // komt uit: greet = function () {
    return `Hallo, ik ben ${this.name} en ik ben ${this.age} jaar oud.`;
  }
  makeOlder() {
    // komt uit: makeOlder = function () {
    //ability geven
    this.age++; //manipulatie plaatsvind
    return this.age;
  }
}

const person1 = new Person("Els", 28, ["zwemmen", "spelen", "voetbal"]);
const person2 = new Person("David", 41, ["zwemmen", "spelen", "voetbal"]);
console.log(person1);
console.log(person1.greet());
console.log(person1.makeOlder());
console.log(person1.nickName);
