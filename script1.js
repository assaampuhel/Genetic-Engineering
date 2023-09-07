function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight * 0.8) {
        element.classList.add('animate-show');
      }
    });
  }

  // Initial animation check
  animateOnScroll();

  // Listen for scroll events and trigger animations
  window.addEventListener('scroll', animateOnScroll);
