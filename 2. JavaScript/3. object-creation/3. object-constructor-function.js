function Person(name, age, hobbies) {
  this.name = name;
  this.age = age;
  this.hobbies = hobbies;
}
Person.prototype.greet = function () {
  return `Hallo, ik ben ${this.name} en ik ben ${this.age} jaar oud.`;
};
Person.prototype.makeOlder = function () {   //ability geven
    this.age++;
    return this.age;
};

const person1 = new Person("Els", 28, ["zwemmen", "spelen"]);
const person2 = new Person("David", 41, ["zwemmen", "voetbal"]);
console.log(person1);
console.log(person2);


person2.makeOlder();
person2.makeOlder();
person2.makeOlder();

console.log(person1.greet());
console.log(person1.makeOlder());
