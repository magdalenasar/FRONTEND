/* push, pop shift, unshift */

const lijst = [];    // array literal notation
//const lijst = new Array();

const newLength = lijst.push("Els");
lijst.unshift("Gert");
const removedItem = lijst.pop();

const dagen = ["maandag", "dinsdag", "geendag", "donderdag"];
dagen.splice(2, 0, "woensdag");
console.log(dagen);

/* map, filter, reduce, sort, foreach, findindex, find */
