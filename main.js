document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Simple form handler
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! We will contact you shortly. For immediate service call (832) 479-1950.');
      form.reset();
    });
  }
});
