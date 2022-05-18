//refs

const form = document.querySelector("form");
const veld = document.querySelector("#zoekString");
const btn = document.querySelector(".is-info");
const lijst = document.querySelector(".columns");
const modal = document.querySelector(".modal");
const modalBg = document.querySelector(".modal-background");
const closeBtn = document.querySelector(".modal-close");
form.onsubmit = function (e) {
  e.preventDefault();
  getData(veld.value);
};

// modalBg.onclick = function () {
//   modal.classList.remove("is-active");
// };
// closeBtn.onclick = function () {
//   modal.classList.remove("is-active");
// };

// lijst.onclick = function (e) {
//   if (e.target.classList.contains("card-image")) {
//     const id = e.target.dataset.cocktail;
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
//       .then((response) => response.json())
//       .then((data) => {
//         modal.querySelector(".title").innerText = data.drinks[0].strDrink;
//         modal.querySelector(".subtitle").innerText =
//           data.drinks[0].strInstructions;
//         modal.classList.add("is-active");
//       })
//       .catch();
//   }
// };

async function getData(str) {
  btn.classList.add("is-loading");
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${str}`
  );
  const data = await response.json();
  lijst.innerHTML = data.drinks
    .map(
      ({ strDrink, strDrinkThumb, idDrink }) => `
          <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
            <div class="card">
                <div class="card-image" data-cocktail="${idDrink}">
                <h2>${strDrink}</h2>
                <figure class="image is-3by4">
                    <img src="${strDrinkThumb}" alt="${strDrink}" />
                </figure>
                </div>
            </div>
          </div>  
  `
    )
    .join("");

  btn.classList.remove("is-loading");
  veld.value = "";
}
