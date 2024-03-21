const images = document.querySelectorAll('.project');
const sliderLine = document.querySelector('.slider__line');
let count = 0;
let width;

function init() {
  console.log('resize');
  width = document.querySelector('.slider').offsetWidth;

  sliderLine.style.width = width * images.length + 'px';
  images.forEach((item) => {
    item.style.width = width + 'px';
  });
  rollSlider();
}
window.addEventListener('resize', init);
init();

document.querySelector('.slider__prev').addEventListener('click', function () {
  count--;
  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();
});

document.querySelector('.slider__next').addEventListener('click', function () {
  count++;
  if (count >= images.length) {
    count = 0;
  }
  rollSlider();
});
function rollSlider() {
  sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}
