'use strict';

// Make navbar transparent when it is on the top

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight)
    {
        navbar.classList.add('navbar--white');
    }
    else
    {
        navbar.classList.remove('navbar--white');
    }
});

// Handle click on "arrow" button on home
const homeContactBtn = document.querySelector('.content__cardsectionbtn');
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#sec1');
});

// Function
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }