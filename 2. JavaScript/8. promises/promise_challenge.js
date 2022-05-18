// Schrijf een function ruimKamerOp() waar je de naam van de persoon aan meegeft en
// dat een Promise teruggeeft
// deze moet dan tussen 5 en 10 seconden later een antwoord geven of de kamer wel of niet is opgeruimd : tussen  5 en 10 seconden => .30 %
// const ruimOp = () => new Promise((res, rej) => {})
// Promise.all ====> 3 keer de kamer laat opruimen.
// Promise.race ====> toon diegene dat het snelst zijn kamer heeft opgeruimd.
// Promise.race() ====> alemaal succesfull moeten zijn , toon dat het snelste heeft opgeruimd


function getRandomTime(min, max, decimalPlaces) {
  return(Math.random()*)
}

const ruimKamerOp = (naam) => new Promise(function (resolve, reject) => {
  const tijd = getRandomTime(3, 10, 2)
  setTimeout(function () {
    const isSuccess = Math.random<= 0.30
    if (isSuccess) {
      resolve({
        naam,
        tijd
    } else {
        reject(
            naam,
            
          ),tijd * 1000
});
      ruimKamerOp("Sigurd").then(console.log).catch(console.log);


