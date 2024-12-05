const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

// Function to show the next slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.left = i === index ? '0' : '100%';
  });

  slides[index].classList.add('active');

  // Disable the next button if the last slide is reached
  nextButton.disabled = index === slides.length - 1;
  prevButton.disabled = index === 0; // Disable previous button if on the first slide
}

// Event listener for the Next button
nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

// Initialize the first slide
showSlide(currentIndex);

const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const fullscreenMenu = document.getElementById('fullscreen-menu');

// Open the menu
burgerButton.addEventListener('click', () => {
  fullscreenMenu.style.transform = 'translateY(0)'; // Show the menu
});

// Close the menu
closeButton.addEventListener('click', () => {
  fullscreenMenu.style.transform = 'translateY(-100%)'; // Hide the menu
});
