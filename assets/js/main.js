// the user clicks (or taps) the hamburger button, the mobile menu appears.
//  The index page
const menuBtn = document.getElementById('menu-btn');

const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-btn');
const body = document.getElementById('body');
const menuLi = document.querySelectorAll('.menu-link');
const introCard = document.getElementById('intro-card');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  body.style.overflow = 'hidden';
  introCard.style.visibility = 'hidden';
  menuBtn.style.visibility = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  body.style.overflow = 'visible';
  introCard.style.visibility = 'visible';
  menuBtn.style.visibility = 'visible';
});

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    body.style.overflow = 'visible';
    introCard.style.visibility = 'visible';
    menuBtn.style.visibility = 'visible';
  });
}