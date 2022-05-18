// Schrijf een function ruimKamerOp() waar je de naam van de persoon aan meegeft en
// dat een Promise teruggeeft
// deze moet dan tussen 5 en 10 seconden later een antwoord geven of de kamer wel of niet is opgeruimd

// Promise.all ====> 3 keer de kamer laat opruimen.
// Promise.race ====> toon diegene dat het snelst zijn kamer heeft opgeruimd.

ruimKamperOp().then().catch();

(fulfilled) => "Kamer werd opgeruimd door Els in (5.73 seconden)";
(rejected) => "Kamer werd niet opgeruimd (7.23 seconden)";
