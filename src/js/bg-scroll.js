function getWindow() {
  let scrt = window.scrollY;
  let scrl = window.scrollX;
  let winh = window.innerHeight;
  let winw = window.innerWidth;

  const BG_1 = "bg-1";
  const BG_2 = "bg-2";

  /* sections lines */
  const body = document.querySelector("body");
  const logoSection = document.querySelector(".section--logo");
  const logoSectionT = logoSection.offsetTop;
  const logoSectionH = logoSection.clientHeight / 2;

  /* scroll fn */
  window.addEventListener("scroll", function () {
    // const scrY = window.scrollY;

    if (scrt < logoSectionT + logoSectionH) {
      body.classList.add(BG_1);
      body.classList.remove(BG_2);
    } else if (scrt > logoSectionT + logoSectionH) {
      body.classList.add(BG_2);
      body.classList.remove(BG_1);
    }
  });
}

getWindow();
window.addEventListener("scroll", getWindow);
window.addEventListener("resize", getWindow);
