const { default: axios } = require("axios");

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; // niet in de browser

// const myPromise = new Promise(function (resolve, reject) {
//   setInterval(function () {
//     resolve("promise ok!");
//   }, 5000);
// });

// console.log(myPromise);

// myPromise
//   .then(function (data) {
//     console.log(data);
//     console.log(data);
//     console.log("second log (na 5 sec): " + myPromise);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

const getData = (url) =>
  new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(200);
        resolve(JSON.parse(xhr.responseText));
      }
      if (this.readyState == 4 && this.status === 404) {
        // console.log(404);
        reject("url could not be reached");
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  });

getData("https://www.thecocktaildb.com/api/ison/v1/1/random.php")
  .then(function (data) {
    console.log(data.drinks[0].strDrink);
  })
  .catch(function (error) {
    console.log(error);
  });


  //==>  vervangt door fetch()

  fetch("https://www.thecocktaildb.com/api/ison/v1/1/random.php")
    .then(function (response) {
      return response.json()
    })
      .then(function())
    .catch(function (error) {
      console.log(error);
    });


    axios()