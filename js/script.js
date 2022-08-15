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

// ========== MODAL WINDOW ==========
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btnOpen => btnOpen.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
