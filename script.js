// AOS Animations
AOS.init();

// Custom Cursor
const cursor = document.getElementById('customCursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

// Skill Bar Animation
document.querySelectorAll('.skill-card').forEach(card => {
  const percent = card.getAttribute('data-percent');
  const fill = card.querySelector('.fill');
  fill.style.width = percent;
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
