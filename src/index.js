
import "./sass/reset.scss";
import "./sass/style.scss";


const subMenu = document.querySelector('.subnav-container');
const btn = document.querySelector('.subnavbtn');


btn.addEventListener('click', function() {
    subMenu.classList.toggle('hidde');
});
