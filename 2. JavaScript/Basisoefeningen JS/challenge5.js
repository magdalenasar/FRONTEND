// generate 5000 sporters
// every Sporter should have between 500 and 1000 logs

// Sporter => fn"", ln"", log[];
// Log => sport"", distance"", time"";

class Sporter {
  constructor(fn, ln) {
    this.fn = fn;
    this.ln = ln;
    this.log = [];
  }
  train(sport, distance, time) {
    this.log.push(new Log(sport, distance, time));
  }
  getTotalDistance() {}
}
class Log {
  constructor(sport, distance, time) {
    this.sport = sport;
    this.distance = distance; // (KMS)
    this.time = time; // (MINUTEN)
  }
}

const allSporters = [];

let nrOfSporters = 5000;
while (nrOfSporters--) {
  const sporter = new Sporter("fn-" + getRandomStr(5), "ln-" + getRandomStr(5));
  let nrOfLogs = getRandomInRange(500, 1000); //functie nog maken
  while (nrOfLogs--) {
    const sport = ["zwemmen", "fietsen", "lopen"][
      Math.floor(Math.random() * 3)
    ];
    switch (
      sport
      //op basis van sport wens ik aanvaardbare data
      // zwemmen => 2 a 3 km, 60 a 140 mins
      // fietsen => 75 a 200 km, 180 a 320 mins
      // lopen => 5 a 20 km , 25 a 120 mins
      // distance =
      // time =
    ) {
    }

    sporter.train(sport, distance, time);
  }
  allSporters.push(sporter);
}

const getRandomStr = (nr) => Math.random().toString(32).substr(2, nr);

// 1) + sum of all sports kms => Calculate the total distance of all traininglogs of all people
// 2) + person with the longest total swimming distance => search for the first-name, last-name and age of the guy that did the longest total swimdistance
// 3) + person with the longest swim distance log => find the guy with the biggest single distance swimtraining
// 4) + sum of all running km of all sporters => Calculate the total running distance of all traininglogs of all people
// 5) + average running speed of all sporters => Calculate avg-speed of all running of all people in all logs
// 6a) - getHighest cycling-avg value
// 6b) - fastest average cycler => Find the guy that is the fastest cycler returning its name and its avg km/h

// SOME TIPS
// put calculations of persons in the prototype as methods in the class.
// - calculateTotalDistance() => optional parameter to filter on sporttype
// - calculateTotalMinutes() => optional parameter to filter on sporttype
// - calculateAVGSpeed() => this makes use of the previous methods

// Certainly the function to calculate the total distances.
// => make a method that accepts an optional parameter with the sport which you want the total kms off.
// Never use arrow-functions in prototype if they make use of the this-keyword
