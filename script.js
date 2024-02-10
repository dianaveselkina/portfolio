let offset = 0;
const sliderLine = document.querySelector('.project__slider');
document.querySelector('.slider__next').addEventListener('click', function () {
  offset = offset + 365;
  if (offset > 3612) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider__prev').addEventListener('click', function () {
  offset = offset - 365;
  if (offset < 0) {
    offset = 3612;
  }
  sliderLine.style.left = -offset + 'px';
});
