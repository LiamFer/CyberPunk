var menu = document.getElementById("menubar");
menu.addEventListener("click", shownav);


function shownav() {
  var navOptions = document.getElementById("nav-options");

  if (navOptions.style.display == "flex") {
    navOptions.style.display = "none";
  } else {
    navOptions.style.display = "flex";
  }
}
