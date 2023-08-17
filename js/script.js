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

document.addEventListener("DOMContentLoaded", function () {
  var customCarouselItems = document.querySelectorAll(".custom-carousel .item");

  customCarouselItems.forEach(function (item) {
    item.addEventListener("click", function () {
      customCarouselItems.forEach(function (otherItem) {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });

  // var customCarousel = document.querySelector(".custom-carousel");
  // customCarousel.style.display = "flex";
  // customCarousel.style.flexWrap = "nowrap";
  // customCarousel.style.overflowX = "scroll";
  // customCarousel.style.scrollBehavior = "smooth";
});
