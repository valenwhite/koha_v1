document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu-overlay');
    const toggle = document.getElementById('menu-toggle');

  
    toggle.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
    });
  });