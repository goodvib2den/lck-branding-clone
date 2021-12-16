function getWindow() {
  scrt = window.scrollY;
  scrl = window.scrollX;
  winh = window.innerHeight;
  winw = window.innerWidth;
}

/* scroll fn */
window.addEventListener("scroll", function () {
  /* sections lines */
  const body = document.querySelector("body");
  const logoSection = document.querySelector(".section--logo");
  const logoSectionT = logoSection.offsetTop;
  const logoSectionH = logoSection.clientHeight / 2;
  const logoParallex = document.querySelector(".section--logo-content");
  const logoParallexT = logoParallex.getBoundingClientRect().top;
  const logoParallexH = logoParallex.clientHeight / 2;

  if (scrt < logoSectionT + logoSectionH) {
    body.className = "bg-1";
  } else if (scrt > logoSectionT + logoSectionH) {
    body.className = "bg-2";
  } else if (scrt > logoParallexT + logoParallexH) {
    body.className = "bg-3";
  }
});

getWindow();
window.addEventListener("scroll", getWindow);
window.addEventListener("resize", getWindow);
