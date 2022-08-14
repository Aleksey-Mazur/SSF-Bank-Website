'use strict';

// ========== MENU BURGER ==========
const burgerIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');

burgerIcon.addEventListener('click', () => navMenu.classList.toggle('_active'));

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('_active');
  });
});
