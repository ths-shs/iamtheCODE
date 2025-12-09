// Select the navbar
const navbar = document.querySelector('.navbar');

// Function to handle scroll
function handleScroll() {
    if (window.scrollY > 50) {      // adjust scroll distance
        navbar.classList.add('scrolled');
        navbar.classList.remove('default');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('default');
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize with default class
navbar.classList.add('default');

//News Script
/* JS WORKS ONLY IF CAROUSEL EXISTS (mobile) */
document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".carousel-wrapper");
    if (!wrapper) return; // Prevent JS errors on desktop

    let index = 0;
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    function updateCarousel() {
        wrapper.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }

    document.querySelector(".next").addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateCarousel();
    });

    document.querySelector(".prev").addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    });

    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            index = i;
            updateCarousel();
        });
    });
});

