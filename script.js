// AOS Animations
AOS.init();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  document.querySelector('.theme-toggle i:first-child').style.display = 'none';
  document.querySelector('.theme-toggle i:last-child').style.display = 'block';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icons = themeToggle.querySelectorAll('i');
  icons.forEach(icon => icon.style.display = icon.style.display === 'none' ? 'block' : 'none');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Skill Bar Animations
document.querySelectorAll('.skill-card').forEach(card => {
  const percent = card.getAttribute('data-percent');
  const fill = card.querySelector('.fill');
  fill.style.width = percent;
});

// Modal Functions
function openModal(id) {
  document.getElementById(id + '-modal').style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id + '-modal').style.display = 'none';
}
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// GSAP Scroll Animations
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: { trigger: ".hero", start: "top center" }
});
gsap.from(".timeline-item", {
  opacity: 0,
  x: -50,
  stagger: 0.2,
  scrollTrigger: { trigger: ".about", start: "top center" }
});
