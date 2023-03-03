import "./sass/style.scss";

const body = document.body;
const menubtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const menuLink = document.querySelectorAll('.menu-nav__link');

menubtn.addEventListener('click', function() {
    menu.classList.toggle('open');
    burger.classList.toggle('open');
    body.classList.toggle('overflow-hidden');
    navMenu.classList.toggle('open');
});

menuLink.forEach(link =>{
    link.addEventListener('click', function(){
        menu.classList.toggle('open');
        burger.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
      
    });
});

 
