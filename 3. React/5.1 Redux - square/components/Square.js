import store from "../data/index.js";

export default class Square {
  //   #x;
  //   #y;
  //   #s;
  //   #c;
  constructor() {
    // this.#x = store.getState().squareState.x;
    // this.#y = store.getState().squareState.y;
    // this.#s = store.getState().squareState.s;
    // this.#c = store.getState().squareState.c;
    this.htmlRef = this.#init();
    this.render();
    store.subscribe(this.render);
  }
  #init() {
    document.body.insertAdjacentHTML("beforeend", `<div class="square"></div>`);
    return document.body.querySelector(".square:last-child");
  }
  render = () => {
    this.htmlRef.style.backgroundColor = store.getState().squareState.c;
    this.htmlRef.style.left = store.getState().squareState.x + "px";
    this.htmlRef.style.top = store.getState().squareState.y + "px";
    this.htmlRef.style.width = store.getState().squareState.s + "px";
    this.htmlRef.style.height = store.getState().squareState.s + "px";
  };
}
