class Animal {
  #name;
  #survived;
  #isDomestic;
  #killList;

  constructor(name) {
    this.#name = this.#generateName();
    this.#survived = Math.random() < 0.33;
  }
  #generateName() {
    return "FLY-" + Math.random().toString(32).substr(2);
  }
  get name() {
    return this.#name;
  }
}

export default Animal;
