document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('nav-links');
  const logo = document.getElementById('main-logo');
  const menuOpen = document.getElementById('menu-open');
  const menuClose = document.getElementById('menu-close');

  const toggleMenu = () => {
    const isOpen = !menu.classList.contains('hidden');
    if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
      void menu.offsetHeight;
      menu.classList.add('flex');
    } else {
      menu.classList.remove('flex');
      void menu.offsetHeight;
      menu.classList.add('hidden');
    }
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');

    // Lock or unlock body scroll when menu opens/closes
    document.body.style.overflow = isOpen ? '' : 'hidden';

  };

  menuOpen.addEventListener('click', toggleMenu);
  menuClose.addEventListener('click', toggleMenu);

  let lastScrollY = window.scrollY;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  if (!header || window.innerWidth < 1024) return;

  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    header.style.transform = 'translateY(-200%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScrollY = window.scrollY;
});
});