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

// Contact form popup
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page refresh

  // Show popup
  const popup = document.getElementById('popup');
  popup.classList.add('show');

  // Clear form
  this.reset();

  // Hide popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
});

