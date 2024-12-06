const slides = document.querySelectorAll('.carousel-slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let currentIndex = 0;
let currentSlide = 0; 
const paginationSpans = document.querySelectorAll('.pagination span');

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


    currentSlide = currentIndex; 
    updatePagination(); 

    nextButton.disabled = false;
    prevButton.disabled = false; 
}

function updatePagination() {
    paginationSpans.forEach(span => span.classList.remove('active'));
    paginationSpans[currentSlide].classList.add('active');
}

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1); 
});

prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1); 
});

showSlide(currentIndex);
updatePagination();