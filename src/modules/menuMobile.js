const mediaQueries = window.matchMedia("(max-width: 767px)");
const body = document.body
const menubtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.menu-btn__burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-nav__link');

export function showMenuMobile() {

    //open/close menu on click button 
    menubtn.addEventListener('click', function () {
        menu.classList.toggle('open');
        burger.classList.toggle('open');
        body.classList.toggle('overflow-hidden');
    });

    //close menu on click link menu 
    menuLink.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.toggle('open');
            burger.classList.toggle('open');
            body.classList.remove('overflow-hidden');
        });
    });

    //hide/show scroll bar on screen resize
    mediaQueries.addEventListener('change', function () {
        const menuOpen = menu.classList.contains('open');

        if (!mediaQueries.matches) body.classList.remove('overflow-hidden');

        if (mediaQueries.matches && menuOpen) body.classList.add('overflow-hidden');

    });
};

