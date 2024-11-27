// const dialog = document.querySelector('dialog')
// document.querySelector('.phone__button-callback').onclick = function () {
//   dialog.showl()
// }

const overlayCallback = document.getElementById('overlayCallback');
const overlaySuccess = document.getElementById('overlaySuccess');
const closeCallbackButton = document.getElementById('close-callback');
const closeSuccessButton = document.getElementById('close-success');

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  overlayCallback.close();
  overlaySuccess.showModal();
});