const axios = require("axios");

//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// const getData = (url) =>
//   new Promise(function (resolve, reject) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         //console.log(200);
//         resolve(JSON.parse(xhr.responseText));
//       }
//       if (this.readyState == 4 && this.status === 404) {
//         //console.log(404);

//         reject("url could not be reached");
//       }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
//   });

axios("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then(function (response) {
    console.log(response.data.drinks[0].strDrink);
  })
  .catch(function (error) {
    console.log(error.message);
  });

//console.log("pending: " + myPromise.isPending());

// myPromise
//   .then(function (data) {
//     console.log(data);
//     console.log("fullfiled: " + myPromise.isFulfilled);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//const ruimOp = () => new Promise((res, rej) => {});
