const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn'); 

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block"; 
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none"; 

});

const themeToggler = document.querySelector('.theme-toggler');

themeToggler.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme-variables')

    const lightMode = themeToggler.querySelector('span:nth-child(1)');
    const darkMode = themeToggler.querySelector('span:nth-child(2)');
    
    lightMode.classList.toggle('active');
    darkMode.classList.toggle('active');
})
