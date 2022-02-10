/*=============== SHOW MENU VARS ===============*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* If someone is reading it, i know it's dumb, but it gets the job done */

if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
      navToggle.classList.add('hide-menu')
      navClose.classList.add('show-menu')
  })
}

/*===== MENU HIDE =====*/
if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
      navToggle.classList.remove('hide-menu')
      navClose.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
    navToggle.classList.remove('hide-menu');
    navClose.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)