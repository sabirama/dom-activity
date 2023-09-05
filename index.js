let menu = document.querySelector("#burger-menu");
let header = document.querySelector("header");

menu.addEventListener("click", function () {
  header.classList.toggle("open");
});
