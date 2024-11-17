const btnMenu = document.querySelector('.main-menu__btn_burger');
const mobMenu = document.querySelector('.main-menu__items');

btnMenu.addEventListener('click', function() {
  const openMenu = mobMenu.classList.toggle('main-menu__open');

  btnMenu.setAttribute('aria-expanded', openMenu);
});

//смена картинки при наведении
const phoneButtons = document.querySelectorAll('.phone__button-callback');

phoneButtons.forEach(button => {
  button.addEventListener('mouseover', () => {
    const img = button.querySelector('.phone__icon');
    img.src = '../icon/telephone_icon_white.svg'; 
  });

  button.addEventListener('mouseout', () => {
    const img = button.querySelector('.phone__icon');
    img.src = '../icon/telephone_icon.svg'; 
  });
});