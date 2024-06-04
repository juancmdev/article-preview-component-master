const btn = document.querySelector("#btn");
const btn_mobile = document.querySelector(".btn-mobile");
const share = document.querySelector("#share");
const share_mobile = document.querySelector("#share-mobile");
const profile = document.querySelector(".profile-information");

const mediaQuery = window.matchMedia("(max-width: 768px)");

mediaQuery.addEventListener("change", handleMediaQueryChange);

function handleMediaQueryChange(e) {
  if (e.matches) {
    share_mobile.classList.add("index");
    btn.addEventListener("click", () => {
      profile.classList.add("index");
      btn.classList.add("index");
      share_mobile.classList.remove("index");
    });
  } else {
    share_mobile.classList.remove("index");
    profile.classList.remove("index");
    btn.classList.remove("index");

    btn.addEventListener("click", () => {
      console.log("Detectando");
      profile.classList.remove("index");
      btn.classList.remove("index");
      share.classList.toggle("share");
    });
  }
}

handleMediaQueryChange(mediaQuery);

btn_mobile.addEventListener("click", () => {
  share_mobile.classList.add("index");
  profile.classList.remove("index");
  btn.classList.remove("index");
});
