const btn = document.querySelector("#btn");
const share = document.querySelector("#share");

btn.addEventListener("click", () => {
  share.classList.toggle("share");
});
