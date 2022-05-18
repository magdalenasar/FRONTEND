//doorlopen
[4, 2, 6].forEach(function (el, i, arr) {
  // console.log(el, i, arr);
});

// array muteren
const doubleArr = [4, 2, 6].map(function (el, i, arr) {
  // return 0 // [0, 0, 0]
  return el * 2;
});

console.log(doubleArr); //[ 8, 4, 12 ]

// CHALLENGE 1:
// Make a class Person
// - give it the following properties
// name, pet
// - create 5 instances of person and show the five pets in the console.

class Person {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet;
  }
}

let person1 = new Person("Stijn", "Freya");
let person2 = new Person("Greet", "Odin");
let person3 = new Person("Koen", "Myrdin");
let person4 = new Person("Carine", "Wodan");
let person5 = new Person("Maarten", "Ragnar");
let persons = [person1, person2, person3, person4, person5];

console.log(persons.map((e) => e.pet));

// CHALLENGE 2:
// Make a class Sport
// - give it the following properties
// name, isOlympic, isBallsport
// - create 8 sports and add them in an array
// - count all the sports that are ballsports using a reduce method (indien niet lukt met ne for-loop)

class Sport {
  constructor(name, isOlympic, isBallsport) {
    this.name = name;
    this.isOlympic = isOlympic;
    this.isBallsport = isBallsport;
  }
}

const sport1 = new Sport("football", true, true);
const sport2 = new Sport("football", true, true);
const sport3 = new Sport("running", false, false);
const allSports = [sport1, sport2, sport3];
const numberOfBallSports = allSports.reduce(
  (tot, e) => tot + (e.isBallsport ? 1 : 0),
  0
);
console.log(numberOfBallSports);

// CHALLENGE 3:
// Create an class Animal
// - give it the following properties
// name
// age
// isDomestic
// - give it the following abilities
// makeOlder
// - create 3 animals
// - make multiple of them age multiple times ...
// - show the name of the oldest in the console
// - give the pet the ability to catch fly's, every time it catches a fly
// the id of the fly (random) is being added to a deathkill list of the pet
// - try to change the fly's datatype from string to object so it can hold a boolean property "survived" (33% chance to survive)
// - show the petName with the most kills in the console (nr)

class Animal {
  constructor(name, age, isDomestic) {
    this.name = name;
    this.age = age;
    this.isDomestic = isDomestic;
    this.catchList = [];
  }
  makeOlder() {
    this.age++;
  }
  attack() {
    this.catchList.push(new Fly());
  }
  getKills() {
    return this.catchList.filter((e) => !e.survive).length;
  }
}

class Fly {
  constructor() {
    this.id = Math.floor(Math.random() * 100);
    this.survive = Math.floor(Math.random() * 101) <= 33;
  }
}

const animal1 = new Animal("Cat", 10, true);
const animal2 = new Animal("Dog", 5, true);
const animal3 = new Animal("Tiger", 15, false);

animal1.makeOlder();
animal1.makeOlder();
animal1.makeOlder();
animal1.makeOlder();
animal1.makeOlder();
animal1.makeOlder();
animal1.makeOlder();

animal2.makeOlder();
animal2.makeOlder();

let allAnimals = [animal1, animal2, animal3];
console.log(allAnimals.sort((a, b) => b.age - a.age)[0].name);

animal1.attack();
animal1.attack();
animal1.attack();
console.log(animal1.catchList);
console.log(animal1.getKills());

animal2.attack();
animal2.attack();
animal2.attack();

animal3.attack();
animal3.attack();
animal3.attack();
console.log(allAnimals.sort((a, b) => b.getKills() - a.getKills())[0].name);

const triple = (value) => {
  return value * 3;
};
