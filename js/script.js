const burgerMenu = document.querySelector(".menu__burger");
const navMenu = document.querySelector(".header__content");

if (burgerMenu) {
  burgerMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_luck");
    burgerMenu.classList.toggle("_active");
    navMenu.classList.toggle("_active");
  });
}
