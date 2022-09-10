const hamburger = document.querySelector(".hamburger");
const hamburger = document.querySelector(".nav-menu");


hamburger.addEvenListener("click", () => {
  hamburger.classList.toggle("active");
  nav-menu.classList.toggle("active");
})