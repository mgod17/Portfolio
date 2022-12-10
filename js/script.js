const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    navLink.classList.toggle("active");
})

navLink.addEventListener("click", () => {
    navLink.classList.toggle("active");
})