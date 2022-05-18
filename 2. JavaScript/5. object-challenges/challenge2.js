// CHALLENGE 2:
/*
Make a class Sport
- give it the following properties
name, isOlympic, isBallsport
- create 8 sports and add them in an array
- count all the sports that are ballsports using a reduce method (indien niet lukt met ne for-loop)
*/

class Sport {
  constructor(name, isOlympic, isBallsport) {
    this.name = name;
    this.isOlympic = isOlympic;
    this.isBallsport = isBallsport;
  }
}

const basketbal = new Sport("basketbal", true, true);
const badminton = new Sport("badminton", true, false);
const hockey = new Sport("hockey", true, false);
const zwemmen = new Sport("zwemmen", true, false);
const judo = new Sport("judo", true, false);
const dansen = new Sport("dansen", true, false);
const flyball = new Sport("flyball", true, true);
const voetbal = new Sport("voetbal", true, true);
const allSports = [
  basketbal,
  badminton,
  hockey,
  zwemmen,
  judo,
  dansen,
  flyball,
  voetbal,
];

// let aantal = 0;
// for (let sport of allSports) {
//   if (sport.isBallsport) {
//     aantal++;
//   }
// }
// console.log(aantal);

allSports.reduce((acc, sportObj) => (sportObj.isBallsport ? acc++ : acc), 0);

allSports.filter(sportObj => sportObj.isBallsport).length;
