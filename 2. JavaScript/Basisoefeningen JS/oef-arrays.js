// 1. Write a JavaScript function to check if a certain word is a Palindrome.
function isPalindroom(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindroom("mama")); //false

// 2. Write a JavaScript function to get a random item from an array.
function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

console.log(getRandomItem(["a", "b", "c"]));

// 3. Write a JavaScript program which accept a string as input and swap the case of each character.
// 	For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// TODO:4.Write a JavaScript function to compute the sum of an array of integers.
function SumInt(integers) {
  let sum = 0;
  integers.forEach(function (integer) {
    sum += integer;
  });
  return sum;
}

console.log(SumInt([1, 2, 3, 4]));

// TODO:5. Write a JavaScript function to remove a specific element from an array
var myNames = ["John", "Cindy", "Omer", "Barbie", "Barbie"];

function removeSpecificelement(removedItem) {
  return (removedItem = myNames.pop());
}
removeSpecificelement(myNames, "Barbie");
console.log(myNames);

// 6. Write a function to remove all strings with less than X characters from an array of strings
// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.
// TODO:8. Write a JavaScript function that returns array elements larger than a number
// given:
// 	var numbers = [5,2,20,60,45];
// 	var toCheck = 6;

// 	returned array:[20,60,45]

// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);
// 10. Write a JavaScript program to find the types of a given angle.  Go to the editor
//   Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.
// 11. Write a JavaScript function to merge two arrays and removes all duplicates elements.

let newArr = [];
function mergeArrays(arr1, arr2) {
  let mergedArr = arr1.concat(arr2);

  for (let i of mergedArr) {
    if (newArr.indexOf(i) === -1) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(mergeArrays([1, 2, 3, 5], [1, 2, 6, 7]));
// 12. given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])

// 13. given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//    nthPower([2,1,6,4],16)

// 14. given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)
// TODO:15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
//   remove all the names that do not start with a capital
function removeLowerCaseNames(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substr(0, 1).toUpperCase() !== arr[i].substr(0, 1)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  removeLowerCaseNames(["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"])
);

// 16. Write a Javascript function to find how many times a certain number occurs in that array.
// 17. Write a JavaScript program to find the most frequent item of an array.
