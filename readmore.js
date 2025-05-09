// Scroll animation function
document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the fade-in class
  const fadeElements = document.querySelectorAll('.fade-in');
  
  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8
    );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
    fadeElements.forEach(element => {
      if (isInViewport(element)) {
        element.classList.add('active');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Trigger once on load
  handleScrollAnimation();
  
  // Add class to all section cards for animation
  document.querySelectorAll('.section-card').forEach((card, index) => {
    card.classList.add('fade-in');
    card.style.animationDelay = `${0.2 * index}s`;
  });
});

// Text animation for paragraphs
document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = document.querySelectorAll('.section-content p');
  
  paragraphs.forEach((paragraph, index) => {
    paragraph.style.animationDelay = `${0.3 * index}s`;
  });
});