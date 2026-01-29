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

// Cards
document.querySelectorAll('#iam-cards .flip-card').forEach(card => {
    card.addEventListener('click', () => {
        // Close all cards first
        document.querySelectorAll('#iam-cards .flip-card').forEach(c => {
            if (c !== card) c.classList.remove('flip');
        });

        // Toggle the clicked card
        card.classList.toggle('flip');
    });
});

// FAQs
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq) => {
    faq.querySelector(".faq-question").addEventListener("click", () => {
        faqs.forEach((item) => {
            if (item !== faq) item.classList.remove("active");
        });
        faq.classList.toggle("active");
    });
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});