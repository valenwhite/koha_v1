document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("main-logo");
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");
  
    if (!logo || !menuOpen || !menuClose) return;
  
    function setInitialInvert() {
      logo.classList.add("invert");
    }
  
    window.addEventListener("load", setInitialInvert);
  
    menuOpen.addEventListener("click", () => {
      logo.classList.remove("invert");
    });

    menuClose.addEventListener("click", () => {
      logo.classList.add("invert");
    });

    window.addEventListener("scroll", () => {
      const scrollLimit = window.innerHeight * 0.78;
      if (window.scrollY > scrollLimit) {
        logo.classList.remove("invert");
      } else {
        logo.classList.add("invert");
      }
    });
  });