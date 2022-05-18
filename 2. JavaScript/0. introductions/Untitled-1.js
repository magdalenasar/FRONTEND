// function toCheck(numbers) {
//     let numbers = [5,2,20,60,45];
//     let numbersAboveSix = numbers.filter(function(number) {
//             return number >= 6;
//     });
// } 

// console.log(toCheck(numbers));

function guid(aantal=32) {
    let guid = "";      //ако тук има const, няма да може да се генерира
    const allChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < aantal; i++) {
      guid += allChars[Math.floor(Math.random() * allChars.length)];
    }
  
    return guid;
  }
  
  console.log(guid()); //=> "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
  console.log(guid(15)); //=> "b7pwBqrZwqaDrex"
  


function guid(aantal=32) {
    let guid = "";      //ако тук има const, няма да може да се генерира
    const allChars = "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < aantal; i++) {
      guid += allChars[Math.floor(Math.random() * allChars.length)];
    }
  
    return guid;
  }
  
  console.log(guid()); //=> "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
  console.log(guid(15)); //=> "b7pwBqrZwqaDrex"
  