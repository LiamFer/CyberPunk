// Menu Mobile com Keyframes

let burguer = document.getElementById("menu-burguer");
let counter = 0;
burguer.addEventListener("click", menuOpen);

function menuOpen() {
  counter++;
  let menuMobile = document.getElementsByTagName("nav")[0];
  menuMobile.classList.toggle("menu-mobile");

  if (counter == 1) {
    burguer.classList.remove("animation-join");
    burguer.classList.toggle("animation-rotate");
  }

  if (counter == 2) {
    burguer.classList.remove("animation-rotate");
    burguer.classList.toggle("animation-rotaterev");
  }

  if (counter > 2) {
    burguer.classList.toggle("animation-rotaterev");
    burguer.classList.toggle("animation-rotate");
    counter = 1;
  }
}

// Efeitos com Typed.js

var typed2 = new Typed(".typed2", {
  strings: ["City of Dreams", "NightCity"],
  loop: true,
  typeSpeed: 180,
  fadeOut: true,
});

// Interatividade com o Formulário

const joinButton = document.getElementById("join-us-button");
const demonBackground = document.getElementById("demon-background");
const formulario = document.getElementById("formulario");

joinButton.addEventListener("click", formOpen);

function formOpen() {
  joinButton.classList.toggle("red-button");
  demonBackground.classList.toggle("showdemon");
  formulario.classList.toggle("showform");

  function hide() {
    joinButton.style.display = "none";
  }
  setTimeout(hide, 3000);
}
