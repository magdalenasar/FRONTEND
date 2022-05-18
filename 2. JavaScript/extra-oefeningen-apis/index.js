/**
 * OEF 1
 */

const rootRef = document.querySelector("#root");
const templateOef1 = document.querySelector("template#oef1").innerHTML;

// inject html
rootRef.insertAdjacentHTML("beforeend", templateOef1);
// selecteren van nodige elementen
const invulPost = document.querySelector("#postcode");
const invulLand = document.querySelector("#landcode");
const resultaat = document.querySelector("#resultaatOef1");
document.querySelector(".knop1").onclick = () => {
  // pas opvragen na men klikt
  const waardePost = invulPost.value;
  const waardeLand = invulLand.value;
  getAndRenderData(waardePost, waardeLand);
};

async function getAndRenderData(waardePost, waardeLand) {
  const basePath = "http://api.zippopotam.us";
  try {
    const response = await axios(`${basePath}/${waardeLand}/${waardePost}`);
    resultaat.innerText = response.data.places[0]["place name"];
  } catch (error) {
    resultaat.innerText = "er is iets foutgelopen";
  }
}

/**
 * OEF 2
 */
const templateOef2 = document.querySelector("template#oef2").innerHTML;
rootRef.insertAdjacentHTML("beforeend", templateOef2);
const knop2 = document.querySelector(".knop2");
const veld = document.querySelector("#gemeente");
const resultaat2 = document.querySelector("#resultaatOef2");
const loading = document.querySelector(".oef2loading");
knop2.onclick = async function () {
  loading.classList.remove("hidden");
  resultaat2.innerHTML = "";
  const response = await axios(
    `https://weatherdbi.herokuapp.com/data/weather/${veld.value}`
  );
  loading.classList.add("hidden");
  resultaat2.innerHTML = response.data.next_days
    .slice(0, 5) // [{day, min_temp : {c: 0, f: 0}},{},{},{},{}]
    //.filter((el) => el.min_temp.c >= 5)
    .map(
      ({ day, min_temp: { c: minc }, max_temp: { c: maxc } }) =>
        `<p>${day} | min:${minc} - max:${maxc}</p>`
    )
    .join("");
};

/**
 * OEF3
 */

const template31 = document.querySelector("#oef31").innerHTML;
const template32 = document.querySelector("#oef32").innerHTML;
rootRef.insertAdjacentHTML("beforeend", template31);
const knopoef3 = document.querySelector(".knopOef3");
const grid3 = document.querySelector(".grid3");
let clicked = 0;

knopoef3.onclick = async function () {
  clicked++;
  if (clicked == 5) {
    const response = await axios(
      "https://api.opensea.io/api/v1/assets?format=json"
    );
    grid3.innerHTML = response.data.assets
      .map((el) => template32.replace("%img%", el.image_thumbnail_url))
      .join("");
  }
};

/**
 * OEF 4
 */
const template4 = document.querySelector("#oef4").innerHTML;
rootRef.insertAdjacentHTML("beforeend", template4);
const grid4 = document.querySelector(".grid4");

document.querySelector(".knopOef4").onclick = async function () {
  const all9promises = new Array(9)
    .fill("")
    .map((el) => axios("https://random.dog/woof.json"));
  const arrayMet9Results = await Promise.all(all9promises);
  grid4.innerHTML = arrayMet9Results
    .map(({ data: { url } }) =>
      url.indexOf(".mp4") === -1
        ? `<li><img src="${url}"></li>`
        : `<li>
                <video width="320" height="240" controls>
                    <source src="${url}" type="video/mp4">
                </video>
           </li>`
    )
    .join("");
};

const arrayMetPromises = [
  axios("https://randomuser.me/api/?results=12"),
  new Promise((res, rej) => res("snel uitgevoerd")),
  axios(
    "https://api.themoviedb.org/3/movie/popular?api_key=10fa74251cfff94026cb589d95b3db91"
  ),
  new Promise((resolve, rejected) => {
    setTimeout(function () {
      resolve(3.1415);
    }, 5000);
  }),
];

async function doeIets() {
  const arrayMetResultaten = await Promise.all(arrayMetPromises);
  console.log(arrayMetResultaten);
}
doeIets();
