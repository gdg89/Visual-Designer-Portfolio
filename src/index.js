import "./sass/style.scss";


const subMenu = document.querySelector('.subnav-container');
const btn = document.querySelector('.subnavbtn');

btn.addEventListener('click', function() {
    subMenu.classList.toggle('hidde');
});



// window.addEventListener('click', function(){
//  console.log('click no documento');
//  const subMenuHidde = subMenu.classList.contains('hidde');

//  if(!subMenuHidde)
//   subMenu.classList.add('hidde');
//  });

 
