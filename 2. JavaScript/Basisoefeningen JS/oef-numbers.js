// 1. Write a JavaScript function that returns an array with generated  Multiplication Table of a given number (max. 1000 iterations)
// 	var result =  generateMultiplicationTable(5);

// 	console.log(result);

// function generateMultiplicationTable(maaltafel) {
//     const iterations = 100;
//     let reeks = ""; // да върне масив

//     //creating a multiplication table
//     for (let i = 0; i < 1000; i++) {
//        // reeks maken
//         reeks += i*maaltafel
//         if (i<1000-1) {
//             reeks += ","
//         }
//      }
//      return reeks;
// }

// console.log(grenerateMultiplicationTable(5));

// 2. extension of first challenge:

// 	Every time a value in the array is divisible by 20 add an (asterisk)* to it

// 3. Write a Javascript function to return wether a value is divisible by a certain number

// 	isDivisible(333,7)
// 	=> false

// 4. Write a Javascript function that return an array with even numbers between a range
// function getEvenNumbersInRange(number) {
//   if (number % 2 === 0) {
//     return [];
//   }
// }
// 	getEvenNumbersInRange(56,1211)

// 5. Write a Javascript function that calculate the distance between two coordinates.
// 	getDistance([20,100],[50,800])

function getDistance(col1, col2) {
  const A = Math.pow(col1[0] - col2[0], 2);
  const B = (col1[1] - col2[1]) ** 2;
  return Math.sqrt(A + B).toFixed(2);
}

console.log(getDistance([20, 100], [50, 800]));
