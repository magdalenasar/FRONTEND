const ipify = require("ipify");

// ipify("https://api.ipify.org/?format=json");

myPromise
  .then(function (myIp) {
    console.log(myIp);
    console.log("My public IP is: " + myIp);
  })
  .catch((error) => console.log(error.message));
