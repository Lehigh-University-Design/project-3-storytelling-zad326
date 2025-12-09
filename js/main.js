document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const slideInMenu = document.getElementById('slide-in-menu');

    menuToggle.addEventListener('click', () => {
        slideInMenu.classList.add('open');
    });

    menuClose.addEventListener('click', () => {
        slideInMenu.classList.remove('open');
    });
});