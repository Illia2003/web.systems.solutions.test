const headerHamburger = document.getElementById("header__hamburger");
const headerMenu = document.getElementById("header__navigation");
const body = document.querySelector("body");

if (headerHamburger) {
  headerHamburger.addEventListener("click", () => {
    headerMenu.classList.toggle("show");
    body.classList.toggle("noscroll");
  });
}
