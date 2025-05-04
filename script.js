// AOS Animations
AOS.init();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  document.querySelector('.theme-toggle i:first-child').style.display = 'none';
  document.querySelector('.theme-toggle i:last-child').style.display = 'block';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const icons = themeToggle.querySelectorAll('i');
  icons.forEach(icon => icon.style.display = icon.style.display === 'none' ? 'block' : 'none');

  // Save theme preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// EmailJS Contact Form
(function() {
  emailjs.init("YOUR_USER_ID");
})();
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_abc123', 'template_xyz456', this);
  alert('Message sent!');
});

// Modals
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
}
