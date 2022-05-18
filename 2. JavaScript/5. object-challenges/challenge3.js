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
    this.killList = [];
  }
  makeOlder(amount = 1) {
    this.age += amount;
  }
  attack(amount) {
    while (amount--) {
      this.killList.push(new Fly());
    }
  }
  getAmountKilled() {
    return this.killList.filter(flyObject => !flyObject.survived).length;
  }
}

class Fly {
  constructor() {
    this.name = "FLY-" + Math.random().toString(32).substr(2, 4);
    this.survived = Math.random() < 0.33;
  }
}

const Simba = new Animal("Simba", 2, false);
const Luke = new Animal("Luke", 1, true);
const Titus = new Animal("Titus", 5, true);
const animals = [Simba, Luke, Titus];

Titus.makeOlder();
Titus.makeOlder(5);
Titus.makeOlder(3);
Simba.makeOlder(6);

Titus.attack(8);
Simba.attack(9);
Luke.attack(7);

// Titus // 14
// Simba //8
// Luke //1

//opzoeken welke leeftijd het oudst is? Maar we wensen de naam
console.log(Math.max(...animals.map(animalObj => animalObj.age)));

console.log(
  animals.sort(function (a, b) {
    return b.age - a.age; // groot naar klein
  })[0].name
);

console.log(JSON.stringify(animals, null, 4));
console.log(
  animals.sort((a, b) => b.getAmountKilled() - a.getAmountKilled())[0].naam
);
