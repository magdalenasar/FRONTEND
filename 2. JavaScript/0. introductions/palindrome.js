/*function isPalindroom(str) {
  const orig = str;
  const omgedraaid = str.split("").reverse().join("");
  const resultaat = orig === omgedraaid;
  return resultaat;
}

console.log(isPalindroom("lepol"));
*/

function isPalindroom(str) {
  return str === str.split("").reverse().join("");
}

// tova se pravi,za da e po-kratko izpylnenieto i da se spesti greshki
//  const isPalindroom = (str) => str === str.split("").reverse().join("");

console.log(isPalindroom("lepol"));
