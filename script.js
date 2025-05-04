// AOS Animations
AOS.init();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icons = themeToggle.querySelectorAll('i');
  icons.forEach(icon => icon.style.display = icon.style.display === 'none' ? 'block' : 'none');
});

// EmailJS Contact Form
(function() {
  emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID
})();
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  emailjs.sendForm('service_abc123', 'template_xyz456', this); // Replace with your Service & Template IDs
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
