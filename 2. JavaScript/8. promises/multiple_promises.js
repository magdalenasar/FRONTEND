const axios = require("axios");

const promise1 = axios(
  "https://www.thecocktaildb.com/api/ison/v1/1/random.php"
);

const promise2 = new Promise(function (resolve, reject) {
  resolve("antwoord van promise2");
});

const promise3 = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve("antwoord van promise3");
  }, 5000);
});

Promise.all([promise1, promise2, promise3]).then(function (data) {
  return data.map(function (el, i, arr) {
    if (el.data) {
      return el.data.drinks[0].strDrink;
    } else {
      return el;
    }
  });
});
// Promise.race();
// Promise.allSettled();
