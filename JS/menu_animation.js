document.querySelector(".bars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
  line1__bars.classList.toggle("activateline1__bars-menu");
  line2__bars.classList.toggle("activateline2__bars-menu");
  line3__bars.classList.toggle("activateline3__bars-menu");
}
