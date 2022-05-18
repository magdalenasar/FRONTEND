// const opposite = number => number *= -1;

// console.log(opposite(-18.0625));

// const removeChar = (str) => (str.length >= 2) ? str.slice(1, -1) : str;

// console.log(removeChar("place"));
// In ECMAScript 6, you can reverse a string even faster without using .split('') split method, with the spread operator like so:
// const solution = (str) => [...str].reverse().join("");

// console.log(solution("place"));

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(6, "I")); // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// const summation = (num) => {
//     let total = 0;
//     for (let i = 1; i <= num; i++){
//         total += i;
//     }
//     return total;
// }

// console.log(summation(2));

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// function highAndLow(numbers) {
// numbers = numbers.split(" ");
// return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// };

// console.log(highAndLow("1 2 3 4 5"));

// const noSpace = x=>x.split(' ').join('');

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));

// function squareSum(numbers) {
//   return numbers.reduce((acc, cur) => acc + cur ** 2, 0);
// }
// console.log(squareSum([1, 2]));

//

// const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;
// console.log(isDivisible(3, 3, 4));

// const century = year => Math.ceil(year/100)
// console.log(century(1705));
// console.log(century(1900));
// console.log(century(1601));
// console.log(century(89));

const litres = (time) => Math.floor(time * 0.5);
console.log(litres(0.82));

// var double = (num) => num * num;
// double(5, 5, 5);
// ako imame 1 zadaden parametur,no izvikame s poveche, kakwo pravi? => error
