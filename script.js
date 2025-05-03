// Scroll Reveal Animations
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.hero', { origin: 'top' });
ScrollReveal().reveal('.about, .experience, .skills, .projects, .languages', { origin: 'bottom' });