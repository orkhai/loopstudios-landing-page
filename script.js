const mobileMenu = document.querySelector(".mobile-menu");
const background = document.querySelector(".background");
const mobileNavOptions = document.querySelector(".mobile-navbar-options");
const body = document.querySelector("body");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu-open");
  background.classList.toggle("mobile-menu-open-background");
  mobileNavOptions.classList.toggle("mobile-navbar-options-displayed");
  body.classList.toggle("mobile-navbar-options-displayed");
});
