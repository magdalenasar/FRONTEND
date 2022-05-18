/*
push, pop, shift, unshift
*/
const lijst = ["Bart", "Cindy"];
//const lijst = new Array();

lijst.push("Els");
lijst.unshift("Gert");
const removedItem = lijst.pop();
lijst.shift();

console.log(removedItem);

const dagen = ["maandag", "dinsdag", "geendag", "donderdag"];
dagen.splice(2, 1, "woensdag");
console.log(dagen);

//dagen.slice()

/*
 * map, filter, reduce, sort, foreach, findindex, find
 */
