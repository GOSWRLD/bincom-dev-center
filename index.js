const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  if (menuToggle.textContent === '☰') {
    menuToggle.textContent = '✖';
  } else {
    menuToggle.textContent = '☰';
  }
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

  let isValid = true;

  if (!/^[A-Za-z\s]{3,}$/.test(nameInput.value.trim())) {
    showError(nameInput, 'Name must be at least 3 letters and contain no numbers.');
    isValid = false;
  }

  if (!/^[0-9]{3,}$/.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Phone must be at least 3 digits and contain only numbers.');
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    showError(emailInput, 'Please enter a valid email address.');
    isValid = false;
  }

  if (messageInput.value.trim().length < 3) {
    showError(messageInput, 'Message must be at least 3 characters long.');
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }

  function showError(inputElement, message) {
    const errorElement = inputElement.parentElement.querySelector('.error-message');
    errorElement.textContent = message;
  }
});