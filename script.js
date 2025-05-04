// Scroll Reveal
AOS.init();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form (EmailJS)
(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_abc123', 'template_xyz456', this); // Replace with your service and template IDs
  alert('Message sent!');
});
