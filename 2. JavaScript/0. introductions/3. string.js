// const naam = "David"; i po 3-te nachina moje da se deklarira
// const naam = 'David';
const naam = "David";
const leeftijd = 40;
const email = "david@testerdetest.be";

// const begroeting =
// "Hallo, ik ben" + naam + "en ik ben" + leeftijd + "jaar oud :-)";

const begroeting = `Hallo, ik ben ${naam} en ik ben ${leeftijd} jaar oud :-)`;

console.log(begroeting);

//string methods:
const positieVanDeAt = email.indexOf("@");
console.log(positieVanDeAt);

console.log(begroeting.toUpperCase());

const str = "wachteenseven";

console.log(str.substring(1, 5));
