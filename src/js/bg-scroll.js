/* sections lines */
const body = document.querySelector("body");
const logoSection = document.querySelector(".section--logo");
const logoSectionT = logoSection.offsetTop;
const logoSectionH = logoSection.clientHeight / 2;

/* scroll fn */
window.addEventListener("scroll", function () {
  const scrY = window.scrollY;

  if (scrY < logoSectionT + logoSectionH) {
    body.classList.add("bg-1");
    body.classList.remove("bg-2");
  } else if (scrY > logoSectionT + logoSectionH) {
    body.classList.add("bg-2");
    body.classList.remove("bg-1");
  }
});
