// Mobile Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
});

// Contact form thank-you message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYou");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    // Show thank-you message
    thankYou.style.display = "block";

    // Clear form fields
    form.reset();

    // Hide after 3 seconds
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 3000);
  });
});
