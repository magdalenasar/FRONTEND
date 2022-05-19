import "./style.css";
import store from "/data";
import { decrement, increment } from "./data/counter";
import { addTodo } from "./data/todo";

function render() {
  document.querySelector("#app").innerHTML = ` <h1>${
    store.getstate().counterState.counter
  }</h1>`;

  document.queryselector("#ul").innerHTML = store
    .getState()
    .todostate.map((todo) => `<li>${todo.todo}</li>`)
    .join("");
}
render();

store.subscribe(render);
document.getElementById("dec").onclick = function () {
  store.dispatch(decrement());
};
document.getElementById("inc").onclick = function () {
  store.dispatch(increment());
};

const form = document.querySelector("form");
form.onsubmit = function (e) {
  Pe.preventDefault();
  store.dispatch(addTodo(form.elements["veld"].value));
  form.reset();
};
