const overlayCallback = document.getElementById('overlayCallback');
const overlaySuccess = document.getElementById('overlaySuccess');

const closeCallbackButton = document.querySelector('.modal-callback__btn-close');
closeCallbackButton.addEventListener('click', () => {
  overlayCallback.close()
});

const closeSuccessButton = document.querySelector('.modal-success__button');
closeSuccessButton.addEventListener('click', () => {
  overlaySuccess.close()
});

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 

  overlayCallback.close();
  overlaySuccess.showModal();
});

const callbackBtn = document.getElementById('.phone__button-callback');
callbackBtn.addEventListener('click', () => {
  overlayCallback.showModal()
});

const overlay = document.querySelector('.overlay');