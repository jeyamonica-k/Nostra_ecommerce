

var Navbar_container_sub3_menu = document.getElementById(
  "Navbar_container_sub3_menu"
);
var Sidenavbar = document.querySelector(".Sidenavbar");
var sidenavbar_close = document.getElementById("sidenavbar_close");

Navbar_container_sub3_menu.addEventListener("click", function () {
  Sidenavbar.style.left = "0%";
});

sidenavbar_close.addEventListener("click", function () {
  Sidenavbar.style.left = "-50%";
});