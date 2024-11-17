const btnMenu = document.querySelector('.main-menu__btn_burger');
const mobMenu = document.querySelector('.main-menu__items');

btnMenu.addEventListener('click', function() {
  const openMenu = mobMenu.classList.toggle('main-menu__open');

  btnMenu.setAttribute('aria-expanded', openMenu);
});