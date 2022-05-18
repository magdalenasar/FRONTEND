const axios = require("axios");

const promise1 = axios(
  "https://www.thecocktaildb.com/api/json/v1/1/random.php"
);

const promise2 = new Promise((resolve, reject) =>
  resolve("antwoord van promise2")
);

const promise3 = new Promise((resolve, reject) => {
  setInterval(() => {
    reject("error");
  }, 2000);
});

// new Promise()
// .then
// .catch

Promise.all([promise1, promise2, promise3])
  .then(function (data) {
    console.log(
      data.map(function (el, i, arr) {
        if (el.data) {
          return el.data.drinks[0].strDrink;
        } else {
          return el;
        }
      })
    );
  })
  .catch(function (error) {
    console.log(error);
  });

//Promise.race([promise1, promise2, promise3]).then((data) => console.log(data));

// Promise.race()
Promise.allSettled([promise1, promise2, promise3]).then(console.log);
