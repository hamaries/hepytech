//navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const back_top = document.getElementById("back_top");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    back_top.classList.add("show");
  } else {
    header.classList.remove("navbar-fixed");
    back_top.classList.remove("show");
  }
};

//hamburger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const btn_sumbit = document.querySelector("#submit");

btn_sumbit.addEventListener("click", () => {
  alert("berhasil di kirim");
});
