var menu = document.getElementById("menubar");
menu.addEventListener("mouseover", shownav);
menu.addEventListener("mouseout", hidenav)


function shownav() {
  var navOptions = document.getElementById("nav-options");
  navOptions.style.display = "block";
}
