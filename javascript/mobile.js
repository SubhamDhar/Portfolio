// HAMBURGER MENU OPERATIONS
let hamburgIcon = document.getElementById('hamburgIcon');
let hamburgMenu = document.querySelector('.hamburgMenu');
let menuCrossBtn = document.getElementById('menuCrossBtn');
//HAMBURG ICON onclick
hamburgIcon.addEventListener('click',()=>{
    hamburgMenu.style.right = '0';
});
//hamburg menu CROSS BTN onclick
menuCrossBtn.addEventListener('click',()=>{
    hamburgMenu.style.right = '-80vw';
});

