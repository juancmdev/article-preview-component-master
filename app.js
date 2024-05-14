const btn = document.querySelector("#btn");
const share = document.querySelector("#share");

if (window.matchMedia("(max-width: 768px)").matches) {
  console.log("/* La pantalla tiene al menos 768 píxeles de ancho */");
} else {
  console.log("/* La pantalla no tiene al menos 400 píxeles de ancho */");
}

btn.addEventListener("click", () => {
  share.classList.toggle("share");
});
