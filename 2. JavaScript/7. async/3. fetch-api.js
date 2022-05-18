import fetch from "node-fetch";

setInterval(getRandomCoctail, 5000);

fetch("https://www.thecpctaildb.com/api/json/v1/1/randon.php") {
  .then(function (responses) {
      //mag ook chain()  of weg laten
      return responses.json(); //enkel de data
  })
        .then(function (data) {
            console.log(data);
        })
  .catch (function(error) {
        console.log("Den download lukte niet");
    });
}

  //thenable - fetch is, return een promises
  //catchable