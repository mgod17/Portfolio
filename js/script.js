// MENU
const burgerMenu = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-menu");
let menuLink1 = document.querySelector(".link1");
let menuLink2 = document.querySelector(".link2");
let menuLink3 = document.querySelector(".link3");
let menuLink4 = document.querySelector(".link4");

burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
menuLink1.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
menuLink2.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
menuLink3.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
menuLink4.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// FORM
// const $form = document.querySelector('#form');
// $form.addEventListener('submit', handleSubmit);

// async function handleSubmit(event) {
//     event.preventDefault();
//     const form = new FormData(this);
//     const response = await fetch(this.action, {
//         method: this.method,
//         body: form,
//         headers: {
//             'Accept': 'application/json'
//         }
//     });
//     if(response.ok) {
//         this.reset();
//         alert('Se envio el mensaje con exito');
//         console.log($form)
//     }
//     else {
//         alert('Se envio el mensaje')
//     }
// }