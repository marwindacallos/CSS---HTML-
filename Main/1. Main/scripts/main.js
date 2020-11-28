// SHOW PROJECTS
const projectsBtn = document.querySelector('.nav__projects')
const projectsMenu = document.querySelector('.projects__menu')

projectsBtn.addEventListener('click', function(){
 projectsMenu.classList.toggle('show__projects')
})

// CLOSE BOXX CIRCLE
const boxBtn = document.querySelector('.box__circle');

boxBtn.addEventListener('click', function(){
 projectsMenu.classList.toggle('close__projects')
})

// SHOW NAVIGATION MENU

const navBtn = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navBtn.addEventListener('click', function(){
 navMenu.classList.toggle('show__menu')
})

