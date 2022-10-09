import 'regenerator-runtime';
// css
import '../styles/footer.css';
import '../styles/main.css';
import '../styles/responsive.css';
// json
import DATA from '../DATA.json';
console.log(DATA);

// toggle nav
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});

function getRestaurants(data) {
  let restoHTML = '';

  data.restaurants.forEach((resto, i) => {
    restoHTML += `
      <div tabindex="0" class="card">
        <div class="img-container">
          <img tabindex="0" class="card-image" alt="${resto.name}" src="${resto.pictureId}"/>
          <span tabindex="0" class="card-rating">
            <i title="ratings" class="fa fa-star"></i>
            <span>${resto.rating}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <p class="card-content-title">${resto.name} - ${resto.city}</p>
          <p class="truncate">${resto.description}</p>
        </div>
      </div>
      `;
  });

  
// toggle nav
document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});

  // append to DOM
  document.getElementById('explore-restaurant').innerHTML = restoHTML;
}
document.querySelector(".menu").addEventListener("click", function () {
  document.querySelector(".nav-list").classList.toggle("nav-list-block");
});

const toggleSwitch = document.querySelector("#dark-mode");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function switchTheme(e) {
  if (
    e.target.classList.value === "light" ||
    e.path[1].classList.value === "light"
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    e.target.classList.remove("light");
    e.target.classList.add("dark");
    e.path[1].classList.remove("light");
    e.path[1].classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    e.target.classList.remove("dark");
    e.target.classList.add("light");
    e.path[1].classList.remove("dark");
    e.path[1].classList.add("light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("click", switchTheme);
getRestaurants(DATA);
