// Object Challenges

// CHALLENGE 1:
// Make a class Person
// 	- give it the following properties
// 		name, pet
// 	- create 5 instances of person and show the five pets in the console.

class Person {
  constructor(name, pet) {
    this.name = name; // opslaan in zijn obj
    this.pet = pet;
  }
}
// 5 maken:
const person1 = new Person("Maggie", "dog");
const person2 = new Person("Marianne", "cat");
const person3 = new Person("Charlie", "lovebird");
const person4 = new Person("Sarah", "chinchilla");
const person5 = new Person("Rob", "rabbit");

console.log(person1.pet);
console.log(person2.pet);
console.log(person3.pet);
console.log(person4.pet);
console.log(person5.pet);

// CHALLENGE 2:
// Make a class Sport
// 	- give it the following properties
// 		name, isOlympic, isBallsport
// 	- create 8 sports and add them in an array
// 	- count all the sports that are ballsports using a reduce method (indien niet lukt met ne for-loop)

class Sport {
  constructor(name, isOlympic, isBallsport) {
    this.name = name;
    this.isOlympic = isOlympic;
    this.isBallsport = isBallsport;
  }
}

let SportsList = [];
const sports = [
  new Sport("volleyball", true, true),
  new Sport("basketball", true, true),
  new Sport("table tennis", true, true),
  new Sport("badminton", true, false),
  new Sport("tennis", true, true),
  new Sport("football", true, true),
  new Sport("cycling", true, false),
  new Sport("swimming", true, false),
];

sports.forEach((sport) => sports.push(new Sport(sport)));

console.log(sports);

// CHALLENGE 3:
// Create an class Animal
// 	- give it the following properties
// 		name
// 		age
// 		isDomestic
// 	- give it the following abilities
// 		makeOlder
// 	- create 3 animals
// 	- make multiple of them age multiple times ...
// 	- show the name of the oldest in the console
// 	- give the pet the ability to catch fly's, every time it catches a fly
// 	  the id of the fly (random) is being added to a deathkill list of the pet
// 	- try to change the fly's datatype from string to object so it can hold a boolean property "survived" (33% chance to survive)
// 	- show the petName with the most kills in the console (nr)

// CHALLENGE 4:
// Create a Cart object constructor
// 	- the cart holds cartitems with a list of products that are bought
// 	- every cartitem has:
// 		- productId
// 		- productTitle
// 		- productPrice
// 		- amount
// 	- it has the ability to add new cartitems
// 	- it has the ability to remove based on ID
// 	- it has the ability to calculate the number of total cartitems
// 	- it has the ability to calculate the number of total products
// 	- it has the ability to calculate the total cost of the order
