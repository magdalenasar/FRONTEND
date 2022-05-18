//eerst Object constructor function
function Todos(routines, drink, breakfast) {
  // property and method definitions:
  this.routines = routines;
  this.drink = drink;
  this.breakfast = breakfast;
}
Todos.prototype.greet = function () {
  return `Goodmornig, Mag! This is your to-do list for this morning:  ${this.routines}, drink some ${this.drink},and prepare a delicious ${this.breakfast},`;
};
/* creating an object /w keyword "new":
 var arr = []; - literal notation
 var arr = new Array(); - constructor notation
*/
const mijnTodoLijst = new Todos(
  ["make bed", "take shower", "get dressed"],
  "coffee",
  "sandwich"
);

console.log(mijnTodoLijst);
console.log(mijnTodoLijst.greet());
// mijnTodoLijst.add ( "selder" );
// mijnTodoLijst.add ( "puppyvoer" );
// mijnTodoLijst.remove ( "puppyvoer" );
// mijnTodoLijst.list ();  // elke item in de terminal loggen ( een lijs maken )
// mijnTodoLijst.empty ();
// mijnTodoLijst.countItems ();

// mijnTodoLijs.lijst ();

// eerst met Object contructor function
// function Todos(list = []) {
// this.items = list;
// }
// Todos.prototype.add = function (str) {
// this.items.push(str);
// };
// Todos.prototype.remove = function (str) {
// this.items = this.items.filter(function (item) {
// return item !== str;
// });
// };
// Todos.prototype.list = function () {
// this.items.forEach(function (item) {
// console.log(item);
// });
// };
// Todos.prototype.empty = function () {
// this.items = [];
// };
// Todos.prototype.countItems = function () {
// console.log(this.items.length);
// };

//class
class Todos {
  constructor(list) {
    this.list = list || []; // OR
  }
  add(str) {
    this.items.push(str);
  }
  remove(str) {
    this.items = this.items.filter((item) => item !== str);
  }
  list() {
    this.items.forEach((item) => console.log(item));
  }
  empty() {
    this.items = [];
  }
  countItems() {
    console.log(this.items.length);
  }
}

const mijnTodoLijst = new Todos();
mijnTodoLijst.add("selder");
console.log(mijnTodoLijst);
mijnTodoLijst.add("puppyvoer");
console.log(mijnTodoLijst);
mijnTodoLijst.remove("puppyvoer");
console.log(mijnTodoLijst);
mijnTodoLijst.list();
mijnTodoLijst.empty();
console.log(mijnTodoLijst);
mijnTodoLijst.countItems();
