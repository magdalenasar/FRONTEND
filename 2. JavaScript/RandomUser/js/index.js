// //1.TODO:reffs

const veld = document.querySelector("#zoekString");
const lijst = document.querySelector(".columns");

// // 2.TODO:FETCH DATA FROM API

async function getData(results) {
  const response = await fetch(`https://www.randomuser.me/api/?results=200`);
  const data = await response.json();
  lijst.innerHTML = data.results
    .map(
      ({ name, gender, email, nat, picture }) => `
          <div class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
            <div class="card">
                <div class="card-image" data-randomuser="${results}">
                <figure class="image is-3by4">
                    <img src="${picture.large}" alt="${name.first}" />
                </figure>
                      <h2>${name.first} ${name.last} </h2>
                <h3>${gender}</h3>
                <h3>${email}</h3>
                <h3>${nat}</h3>
                </div>
            </div>
          </div>
  `
    )
    .join("");
}

getData();

// async function render(data, zoekSting = "") {
//   lijst.innerHTML = data.filter(
//   ({ name }) =>
//     name.first.indexOf(zoekString) !== -1 ||
//     name.last.indexOf(zoekString) !== -1
// );

// document.querySelector("#name").oninput = function (e) {
//   if (e.target.value.length >= 3) {
//     render(e.target.value);
//   } else {
//     render(data);
//   }
// }
