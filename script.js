let burguer = document.getElementById("menu-burguer");

burguer.addEventListener("click", menuOpen);

function menuOpen() {
  let menuMobile = document.getElementsByTagName("nav")[0];
  menuMobile.classList.toggle("menu-mobile");
  burguer.classList.toggle("animation-rotator");
  burguer.classList.toggle("animation-rotatereverse");
}

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
