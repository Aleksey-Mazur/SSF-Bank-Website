'use strict';

const burgerIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav__link');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// ========== MENU BURGER ==========
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

// ========== MODAL WINDOW ==========
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// ========== SMOOTH SCROLL ==========
btnScrollTo.addEventListener('click', e =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

// ========== PAGE NAVIGATION ==========
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (
    e.target.classList.contains('nav__link') &&
    !e.target.classList.contains('btn--show-modal')
  ) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
