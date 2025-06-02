const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
