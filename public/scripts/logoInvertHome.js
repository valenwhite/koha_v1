document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("main-logo");
    const menuOpen = document.getElementById("menu-open");
    const menuClose = document.getElementById("menu-close");
  
    if (!logo || !menuOpen || !menuClose) return;
  
    function setInitialInvert() {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        logo.classList.add("invert");
      } else {
        logo.classList.remove("invert");
      }
    }
  
    window.addEventListener("load", setInitialInvert);
    window.addEventListener("resize", setInitialInvert);
  
    menuOpen.addEventListener("click", () => {
      logo.classList.remove("invert");
    });
  
    menuClose.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        logo.classList.add("invert");
      }
    });
  });