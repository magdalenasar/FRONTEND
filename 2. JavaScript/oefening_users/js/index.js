const input = document.querySelector("input");
const form = document.querySelector("form");
const lijst = document.querySelector(".columns");
const usersTemplate = document.querySelector("[data-users]").innerHTML; //избиране с атрибут от темплейта

// lijst.onclick = function (e) {
//   if (e.target.classList.contains("column")) {
//     console.log("test");
//   }
// };

async function main() {
  const response = await fetch("https://randomuser.me/api/?results=200");
  const data = await response.json();
  const allUsers = data.results;

  render(allUsers);

  function render(users, str = "") {
    const reg = new RegExp(str, "gi");
    lijst.innerHTML = users
      .filter(
        //деструктуриране
        ({ name: { first, last }, location: { city } }) =>
          first.match(reg) || last.match(reg) || city.match(reg)
      )
      .map(
        //деструктуриране
        ({
          name: { first, last },
          picture: { large },
          email,
          phone,
          cell,
          location: {
            street: { name, number },
            postcode,
            city,
            country,
          },
        }) =>
          //филтриране по:
          usersTemplate
            .replaceAll("%firstname%", first)
            .replaceAll("%lastname%", last)
            .replaceAll("%image%", large)
            .replaceAll("%email%", email)
            .replaceAll("%phone%", phone)
            .replaceAll("%cell%", cell)
            .replaceAll("%streetname%", name)
            .replaceAll("%streetnumber%", number)
            .replaceAll("%postal%", postcode)
            .replaceAll("%city%", city)
            .replaceAll("%country%", country)
      )
      .join("");
  }
  //филтриране форма, ако се пише в полето -> е.target = input
  input.oninput = (e) => {
    if (e.target.value.length >= 3) {
      render(allUsers, e.target.value);
    } else {
      render(allUsers); //ако се изтрие всичко в полето, така ще върне всички потребители
    }
  };
}

main();
