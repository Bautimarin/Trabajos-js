// Configuración del carrusel
const slideInterval = 1000; 
const conteoDeImagenes = 4;

const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;

function mostrarSlides(index) {
  slidesContainer.style.transform = `translateX(-${index *50}%)`;
}

function ComenzarCarrusel() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % conteoDeImagenes;
    mostrarSlides(currentIndex);
  }, slideInterval);
}

ComenzarCarrusel();
