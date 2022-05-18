class Persoon {
    //private fields privacy, alles wat naar de constructor stuurt moet eerst hier aanduiden
    #achternaam;
    #voornaam;
    #age;
    constructor(voornaam, achternaam, age) {
        this.#voornaam = voornaam;
        this.#achternaam = achternaam;
        this.#age = age;
    }
    get naam() {
        return.#voornaam + " " + this.#achternaam;
    }

    set naam() {
         //validation possibility
         this.voornaam = str.split(" ")[0];
         this.achternaam = str.split(" ")[1];
    }

}

const ik = new person("Magdalena", "Sarandeva"); 
console.log(ik);
console.log(ik.voornaam);
ik.voornaam = "Maggie";
console.log(ik);
console.log(ik.naam);
ik.naam = "Els Hoosoot";
console.log(ik);
// ik.#voornaam = "Bert"; => error
//ik.#age = 28; => error, want is private 
