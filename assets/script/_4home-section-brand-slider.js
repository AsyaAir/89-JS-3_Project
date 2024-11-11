const arrowLeft = document.querySelector(".brand__button-arrow-left");
const arrowRight = document.querySelector(".brand__button-arrow-right");
const slidesAll = document.querySelectorAll(".brand__photo");
const slidesArray = Array.from(slidesAll);

let slideIndex = 0;

arrowLeft.onclick = () => showPrevSlide();
arrowRight.onclick = () => showNextSlide();

function showPrevSlide () {
   slideIndex = (slideIndex - 1 + slidesArray.length) % slidesArray.length; // % slidesArray.length для "цикличности" значений индекса, позволяя индексу перемещаться по кругу от первого слайда к последнему и наоборот (см.ниже).
   updateSlide();
};

function showNextSlide () {
   slideIndex = (slideIndex + 1) % slidesArray.length;
   updateSlide();
};

function updateSlide () {
   slidesArray.forEach((slide, index) => {
      if (index === slideIndex) {
         slide.style.display = 'block';
      } else {
         slide.style.display = 'none';
      };
   });
};