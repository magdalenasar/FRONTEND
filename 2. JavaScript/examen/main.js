//REFS
const grid = document.querySelector(".columns");
const gridItemTemplate = document.querySelector("template#griditem").innerHTML;
const form = document.querySelector("form");
const searchInput = document.querySelector("form input");
const title = document.querySelector("h1.title");
const prev = document.querySelector(".pagination-previous");
const next = document.querySelector(".pagination-next");
const pagination = document.querySelector(".pagination");
const paginationNumbers = document.querySelector(".pagination p");
let pagePos = 1;
let init = true;
let movieToSearch = "";
const basePath = "https://api.themoviedb.org/3";
const key = "10fa74251cfff94026cb589d95b3db91";
let genres;

//INITLOAD
async function main() {
  genres = await getGenres();
  const { movies } = await getData();
  renderData(movies, "Trending movies");
}
main();

//EVENTS
form.onsubmit = async function (e) {
  e.preventDefault();
  pagePos = 1;
  await search();
};
next.onclick = async function (e) {
  e.preventDefault();
  pagePos++;
  await search();
};
prev.onclick = async function (e) {
  e.preventDefault();
  pagePos--;
  await search();
};

//FUNCTIONS
async function search() {
  const { movies, page, total_pages, total_results } = await getData();
  renderData(
    movies,
    "Movies matching '" + searchInput.value + "'",
    page,
    total_pages,
    total_results
  );
}

async function getGenres() {
  const {
    data: { genres },
  } = await axios(`${basePath}/genre/movie/list?api_key=${key}`);
  return genres;
}

async function getData() {
  let url;
  if (init) {
    url = `${basePath}/movie/popular?api_key=${key}&page=1`;
  } else {
    movieToSearch = searchInput.value;
    url = `${basePath}/search/movie?api_key=${key}&query=${movieToSearch}&page=${pagePos}`;
  }
  const {
    data: { results: movies, page, total_pages, total_results },
  } = await axios(url);
  return { movies, page, total_pages, total_results };
}

function renderData(movies, titleMsg, page, total_pages, total_results) {
  title.innerText = titleMsg;
  grid.innerHTML = "";
  grid.insertAdjacentHTML(
    "beforeend",
    movies
      .map(({ poster_path, original_title, genre_ids }) =>
        gridItemTemplate
          .replaceAll("%title%", original_title)
          .replace("%image%", poster_path)
          .replace(
            "%genres%",
            genre_ids
              .map((id) => genres.find((genre) => genre.id === id).name)
              .join(", ")
          )
      )
      .join("")
  );

  if (!init) {
    pagination.classList.remove("hidden");
    renderPagination(page, total_pages, total_results);
  }
  init = false;
}

function renderPagination(page, total_pages, total_results) {
  pagePos = page;
  if (pagePos === 1) {
    prev.setAttribute("disabled", "disabled");
  } else {
    prev.removeAttribute("disabled");
  }
  if (pagePos === total_pages) {
    next.setAttribute("disabled", "disabled");
  } else {
    next.removeAttribute("disabled");
  }
  const start = (page - 1) * 20 + 1;
  const end = pagePos === total_pages ? total_results : page * 20;
  paginationNumbers.innerText = `${start}-${end} / ${total_results}`;
}
