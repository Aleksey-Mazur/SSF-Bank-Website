'use strict';

// ========== MENU BURGER ==========
const burgerIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

burgerIcon.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  burgerIcon.classList.toggle('_active');
  navMenu.classList.toggle('_active');
});

navLink.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    burgerIcon.classList.remove('_active');
    navMenu.classList.remove('_active');
  });
});

// ========== SMOOTH SCROLL ==========
navLink.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
