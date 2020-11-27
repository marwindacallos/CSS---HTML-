//Selectors
// NAVBAR HAMBURGER
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function(){
 header.classList.toggle('menu-open');
})

// NAVBAR SOLID COLOR
window.addEventListener('scroll', function(){
 let windowPosition = window.scrollY > 0;
 header.classList.toggle('active', windowPosition)
})