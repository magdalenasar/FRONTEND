console.log(document.querySelectorAll("p"));

/**
 * EVENTS
 */

function handleMouseMove(e) {
  document.querySelector("#veld").value = `x: ${e.clientX}, y:${e.clientY}`;
}

document.addEventListener("mousemove", handleMouseMove);

setTimeout(function () {
  document.removeEventListener("mousemove", handleMouseMove);
}, 3000);

document.querySelector("h2").addEventListener(
  "click",
  function () {
    alert("test");
  },
  { once: true }
);

document.querySelectorAll("p").forEach((el, i) => {
  el.onclick = function () {
    console.log("test", i);
  };
});

// document.onmousemove = function (e) {
//   console.log(e.clientX, e.clientY);
//   //console.log("bewogen");
// };

// document.querySelector("#veld").onchange = function (e) {
//   console.log(e.target.value);
// };
// document.querySelector("#veld").onchange = null;

// function doeIets() {
//   console.log("test");
// }

// document.querySelector("h1").onclick = doeIets;

// setTimeout(function () {
//   document.querySelector("h1").onclick = null;
// }, 1000);

// const mijnFoto = document.querySelector('img');

// mijnFoto.onLoad  = function(){}

// mijnFoto.addEventListener('load', function(){
//     console.log("foto is ingeladen")
// })

// mijnFoto.addEventListener('load', function(){
//     console.log("foto is ingeladen")
// })
