function getWindow() {
  scrt = window.scrollY;
  scrl = window.scrollX;
  winh = window.innerHeight;
  winw = window.innerWidth;
}

/* sections lines */
const body = document.querySelector("body");
const logoSection = document.querySelector(".section--logo");
const logoSectionT = logoSection.offsetTop;
const logoSectionH = logoSection.clientHeight / 2;

/* scroll fn */
window.addEventListener("scroll", function () {
  // const scrY = window.scrollY;

  if (scrt < logoSectionT + logoSectionH) {
    body.className = "bg-1";
  } else if (scrt > logoSectionT + logoSectionH) {
    body.className = "bg-2";
  }
});

getWindow();
window.addEventListener("scroll", getWindow);
window.addEventListener("resize", getWindow);
