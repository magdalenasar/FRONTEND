const naam = "David";
const leeftijd = 40;
const email = "davidtesterdetest.be";
// const naam2 = 'David';
// const naam3 = `David`;

// const begroeting =
//   "Hallo, Ik ben " + naam + " en ik ben " + leeftijd + " jaar oud :-)";

const begroeting = `Hallo, Ik ben ${naam} en ik ben ${leeftijd} jaar oud :-)`;

console.log(begroeting);

//string methods
const positieVanDeAt = email.indexOf("@");
console.log(positieVanDeAt);

console.log(begroeting.toUpperCase());

const str = "wachteenseven";

console.log(str.replace("even", ""));

console.log("-".repeat(5));

const lijstMetNamen = "jos,bert,cindy,Geert"
  .split(",")
  .join(" - ")
  .indexOf("-");

// const nieuweLijstMetNamen = lijstMetNamen.join(" - ");

// console.log(nieuweLijstMetNamen);

// METHOD CHAINING
