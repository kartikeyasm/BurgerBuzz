let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateX = -currentIndex * 100;
    slides.style.transform = `translateX(${translateX}%)`;
}

setInterval(showNextSlide, 3000);
