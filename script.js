let offset = 0;
const sliderLine = document.querySelector('.project__slider');
document.querySelector('.slider__next').addEventListener('click', function () {
  offset = offset + 602;
  if (offset > 4214) {
    offset = 0;
  }
  sliderLine.style.left = offset + 'px';
});
