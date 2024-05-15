const btn = document.querySelector("#btn");
const btn_mobile = document.querySelector(".btn-mobile");
const share = document.querySelector("#share");
const share_mobile = document.querySelector("#share-mobile");

if (window.matchMedia("(max-width: 768px)").matches) {
  btn_mobile.addEventListener("click", () => {
    share_mobile.classList.toggle("display");
  });
}

btn.addEventListener("click", () => {
  share.classList.toggle("share");
});
