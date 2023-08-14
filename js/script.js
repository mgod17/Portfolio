const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-link");
const projectsContainer = document.querySelector(".proyects-grapper");

function toggleMenu() {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

burgerMenu.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
