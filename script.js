const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active')
}
