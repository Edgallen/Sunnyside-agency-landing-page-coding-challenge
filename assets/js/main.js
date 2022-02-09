/*=============== SHOW MENU ===============*/ 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navMenu){
  console.log(navMenu.style.display)
}
/*===== MENU SHOW =====*/
/* Validate if constant exists */
navToggle.addEventListener('click', () =>{
    navMenu.style.display = "block";
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navMenu.style.display === "block"){
  navToggle.addEventListener('click', () =>{
      navMenu.style.display == "none";
  })
}

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)