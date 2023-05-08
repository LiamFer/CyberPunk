

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

var typed1 = new Typed(".typed1", {
  strings: ["CYBERTOWN"],
  loop: false,
  showCursor: false,
  typeSpeed: 140,
});

var typed2 = new Typed(".typed2", {
  strings: ["NightCity...", "Hell..."],
  loop: true,
  typeSpeed: 140,
  backSpeed: 80,
});

