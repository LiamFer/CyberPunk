let burguer = document.getElementById("menu-burguer");

burguer.addEventListener("click", menuOpen);

function menuOpen() {
  let menuMobile = document.getElementsByTagName("nav")[0];
  menuMobile.classList.toggle("menu-mobile");
  burguer.classList.toggle("animation-rotator");
  burguer.classList.toggle("animation-rotatereverse");
}
