// script.js

// ====== CARRUSEL AUTOMÁTICO ======
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-indicators .dot');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

// Poner evento click a cada punto
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

// Cambiar slide cada 5 segundos
setInterval(nextSlide, 5000);

// Mostrar primer slide
showSlide(currentIndex);


// ====== PANEL LATERAL WISHLIST ======
const wishlistBtn = document.querySelector('.wishlist-btn');
const wishlistPanel = document.getElementById('wishlist-panel');
const closeWishlistBtn = document.getElementById('close-wishlist');

wishlistBtn.addEventListener('click', () => {
  wishlistPanel.classList.toggle('active');
});

closeWishlistBtn.addEventListener('click', () => {
  wishlistPanel.classList.remove('active');
});



