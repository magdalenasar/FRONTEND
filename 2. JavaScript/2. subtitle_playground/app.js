const fs = require("fs");
const path = require("path");

console.time();
const folder = process.argv[2];
const folderContents = fs.readdirSync(folder);
let allWords = "";

for (subtitleFileName of folderContents) {
  allWords += fs.readFileSync(path.join(folder, subtitleFileName), "utf-8");
}

//array met worden boven de 5 chars
allWords = allWords
  .trim()
  .toLowerCase()
  .replace(/[0-9:,->?'"!().&`�\n\r]/g, " ") // .replace(/[ˆa-z]/g, " ")
  .replace(/(color|font|ff)/g, " ")
  //.replace(/(font)/g, " ")  gore sa sabrani
  //.replace(/(ff)/g, " ")
  .replace(/ +/g, " ")
  .split(" ")
  .filter(function (woord) {
    return woord.length >= 10;
  });

// const uniekeWoorden = [...new Set(allWords)]; //
// console.log(uniekeWoorden, uniekeWoorden.length);

/*
["brand","water","brand","pintje","brand","water"]
=>
{
"brand" : 3,
"water" : 2,
"pintje" : 1
}
*/

const objectMetWoordenAantalVoorkomen = allWords.reduce(function (obj, woord) {
  obj[woord] = obj[woord] + 1 || 1;
  return obj;
}, {});

const gesorteerdeWoorden = Object.keys(objectMetWoordenAantalVoorkomen).sort(
  function (a, b) {
    return (
      objectMetWoordenAantalVoorkomen[b] - objectMetWoordenAantalVoorkomen[a]
    );
  }
);

console.log(gesorteerdeWoorden);
console.timeEnd();

// const objectMetWoordenAantalVoorkomen = {    //dit is wat we bekomen
//     "kijkplezier" : 8,
//         "toyota" : 4,
//             "oktober" : 1
// }
//console.log(allWords, allWords.length);
