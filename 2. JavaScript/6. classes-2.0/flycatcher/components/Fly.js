class Fly {
  #name;
  #survived;
  constructor() {
    this.#name = this.#generateName();
    this.#survived = Math.random() < 0.33;
  }
  #generateName() {
    return "FLY-" + Math.random().toString(32).substr(2);
  }
  get name() {
    return this.#name;
  }
  get survived() {
    return this.#survived;
  }
}

export default Fly;
