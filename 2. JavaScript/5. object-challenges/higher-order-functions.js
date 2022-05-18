// // //doorlopen
// // console.log(
// //   [4, 2, 6].forEach(function (el, i, arr) {
// //     // console.log(el, i, arr);
// //   })
// // );
// // function makeDouble(el) {
// //   return el * 2;
// // }
// // const md = (n) => n * 2;
// // const doubleArr = [4, 2, 6].map(md);
// // console.log(doubleArr);

// const filteredArray = [4, 5, 6, 13].filter((el) => el ** 2 >= 20);
// console.log(filteredArray);

// const voldoenZe = [4, 2, 6].some(function (el, i, arr) {
//   return el > 6;
// });

// console.log(voldoenZe);

// const positiesMetZes = [];

// [6, 2, 6, 1, 26, 54, 616, 6185, 165, 16, 36, 6, 6, 612].forEach(function (
//   el,
//   i
// ) {
//   if (el === 6) {
//     positiesMetZes.push(i);
//   }
// });

// console.log(positiesMetZes);

// [5, 2, 1].reduce(function (tussenWaarde, el, i, arr) {
//   return tussenWaarde + el;
// }, 3);

// /// Fibonnaci [0,1,1,2,3,5,8]

// const fibo = new Array(100).fill(0).reduce(
//   function (acc, el, i, arr) {
//     acc.push(acc[i] + acc[i + 1]);
//     return acc;
//   },
//   [0, 1]
// );

// console.log(fibo);

// const fibo = new Array(100)
//   .fill(0)
//   .reduce((a, e, i) => [...a, a[i] + a[i + 1]], [0, 1]);

// console.log(fibo);

const woorden = ["brand", "speelgoed", "brand", "water", "brand"];

const aantalVoorkomen = woorden.reduce(function (obj, el, i, arr) {
  obj[el] = obj[el] + 1 || 1;
  return obj;
}, {});

console.log(aantalVoorkomen);
