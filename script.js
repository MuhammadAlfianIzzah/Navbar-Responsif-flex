const burger = document.getElementById('burger');
const nav = document.querySelector('nav ul');
burger.addEventListener('click', function () {
    this.classList.toggle('click');
    nav.classList.toggle('slide');
});