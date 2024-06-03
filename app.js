const btn = document.querySelector("#btn");
const btn_mobile = document.querySelector(".btn-mobile");
const share = document.querySelector("#share");
const share_mobile = document.querySelector("#share-mobile");
const profile = document.querySelector(".profile-information");

if (window.matchMedia("(max-width: 768px)").matches) {
  btn_mobile.addEventListener("click", () => {
    profile.classList.remove("index");
    btn.classList.remove("index");
    share_mobile.classList.add("index");
  });
}

btn.addEventListener("click", () => {
  share.classList.toggle("share");
});
