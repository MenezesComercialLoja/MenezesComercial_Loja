let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

// Esconde todas e mostra a da vez
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? "1" : "0";
    });
}

// Função que avança o slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Inicia mostrando a 1ª
showSlide(currentIndex);

// Troca a cada 4 segundos
setInterval(nextSlide, 4000);
