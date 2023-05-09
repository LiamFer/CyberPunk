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
  strings: ["City of Dreams"],
  loop: false,
  typeSpeed: 140,
  showCursor: false,
});

var typed3 = new Typed(".typed3", {
  strings: ["あきらめてはいけない"],
  loop: false,
  typeSpeed: 140,
  showCursor: false,
});
var typed4 = new Typed(".typed4", {
  strings: ["In the dystopian world of Cyberpunk 2077, where corporations hold ultimate power and the line between human and machine is blurred, the words giving up hold a different weight. Our greatest weakness as individuals, as a society, and as a species, lies in surrendering to the oppression of those in control."],
  loop: false,
  typeSpeed: 40,
  showCursor: false,
});
