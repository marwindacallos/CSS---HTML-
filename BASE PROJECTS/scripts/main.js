// SHOW PROJECTS
const projectsBtn = document.querySelector('.nav__projects')
const projectsBar = document.getElementById('.projects__menu')

projectsBtn.addEventListener('click', () => {
 projectsBar.classList.toggle('show__projects')
})

// SHOW NAVIGATION MENU


// const navMenuSlide = () => {
//  const navBtn = document.querySelector('.nav__toggle');
//  const navMenu = document.querySelector('.nav__menu');
//  // TOGGLE NAV MENU
//  navBtn.addEventListener('click', () =>{
//   navMenu.classList.toggle('show__menu');
//  });
// }
// navMenuSlide();

const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', function(){
 navMenu.classList.toggle('show__menu')
})

console.log(5);