import store from "./data/index.js";
import { increment, decrement, multiplyBy5 } from "./data/counter.js";
import { removeFriend, addFriend } from "./data/vrienden.js";
import { setColor, setSize } from "./data/square.js";
import Square from "./components/Square.js";
//1) function = .getState() => opvragen van de huidige STATE
console.log(store.getState());
//2) function = .dispatch() => functie waarmee we action-objecten kunnen sturen naar de store.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

function updateCounterUi() {
  document.querySelector("h2 span").innerText =
    store.getState().counterState.counter;
}

document.querySelector(".inc").onclick = function () {
  store.dispatch(increment());
};
document.querySelector(".dec").onclick = function () {
  store.dispatch(decrement());
};

document.querySelector(".multiplyBy5").addEventListener("click", function () {
  store.dispatch(multiplyBy5());
});

updateCounterUi();

store.subscribe(updateCounterUi);

// UI LOGICA VOOR VRIENDEN
function renderVrienden() {
  document.querySelector("ul.vrienden").innerHTML = store
    .getState()
    .vriendenState.map(
      (vriend) =>
        `<li>${vriend.vriend} <button data-id="${vriend.id}" class="wis">wis</button></li>`
    )
    .join("");
}
renderVrienden();
store.subscribe(renderVrienden);

document.querySelector("ul.vrienden").onclick = (e) => {
  if (e.target.classList.contains("wis")) {
    store.dispatch(removeFriend(e.target.dataset.id));
  }
};

const form = document.querySelector("form");
form.onsubmit = (e) => {
  e.preventDefault();
  store.dispatch(addFriend(form.elements["name"].value));
  form.reset();
};

new Square(100, 100, 300, "#ff0000");

document.querySelector("input[type=range]").oninput = function (e) {
  store.dispatch(setSize(parseInt(e.target.value)));
};

document.querySelector("input[type=color]").oninput = function (e) {
  store.dispatch(setColor(e.target.value));
};
