const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;

function showSlide(index) {
  if (index >= slides.length) {
    currentIndex = 0; 
  } else if (index < 0) {
    currentIndex = slides.length - 1; 
  } else {
    currentIndex = index; 
  }

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.left = i === currentIndex ? '0' : '100%';
  });
  slides[currentIndex].classList.add('active');
  nextButton.disabled = false;
  prevButton.disabled = false; 
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1); 
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1); 
});

showSlide(currentIndex);

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const fullscreenMenu = document.getElementById('fullscreen-menu');

burgerButton.addEventListener('click', () => {
  fullscreenMenu.style.transform = 'translateY(0)'; 
});

closeButton.addEventListener('click', () => {
  fullscreenMenu.style.transform = 'translateY(-100%)';
});