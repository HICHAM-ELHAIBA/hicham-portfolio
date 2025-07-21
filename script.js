// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icons = themeToggle.querySelectorAll('.icon');

// Load saved theme
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  icons[0].style.display = 'none';
  icons[1].style.display = 'block';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
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
