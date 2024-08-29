const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

const navItems = document.querySelectorAll('.nav-links li');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});