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

  // Save preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
