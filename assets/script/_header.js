const btnBurger = document.querySelector('.main-menu__btn_burger');
const mobMwenu = document.querySelector('.main-menu__items');

btnBurger.addEventListener('click', () => {
  mobMwenu.classList.toggle('.main-menu__burger_open')
});