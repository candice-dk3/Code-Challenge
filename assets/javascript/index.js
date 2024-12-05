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

document.addEventListener('DOMContentLoaded', function() {
  const burgerIcon = document.getElementById('burger-icon');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeIcon = document.getElementById('close-icon');

  // Show the menu when the burger icon is clicked
  burgerIcon.addEventListener('click', function() {
      menuOverlay.classList.add('active');
  });

  // Hide the menu when the close icon is clicked
  closeIcon.addEventListener('click', function() {
      menuOverlay.classList.remove('active');
  });

  // Optional: Hide the menu when clicking outside of it
  menuOverlay.addEventListener('click', function(event) {
      if (event.target === menuOverlay) {
          menuOverlay.classList.remove('active');
      }
  });
});