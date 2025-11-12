const listMobile = document.getElementById('list-mobile');
const menu = document.getElementById('menu-mobile')
const overlayMenu = document.getElementById('overlay-menu');

listMobile.addEventListener('click', () => {
    menu.classList.add('show-menu');
})

menu.addEventListener('click', () => {
    menu.classList.remove('show-menu');
})
overlayMenu.addEventListener('click', () => {
    menu.classList.remove('show-menu');
})