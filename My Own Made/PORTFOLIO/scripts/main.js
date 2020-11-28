// SHOW PROJECTS
const projectsBtn = document.querySelector('.nav_main');
const projectsBar = document.querySelector('.nav_menu_projects');

projectsBtn.addEventListener('click', function(){
 projectsBar.classList.toggle('show_projects')
})

// SHOW NAV-LINKS
const linksBtn = document.querySelector('.hamburger_menu');
const linksBar = document.querySelector('.nav_menu_links')

linksBtn.addEventListener('click', function(){
 linksBar.classList.toggle('show_links')
})