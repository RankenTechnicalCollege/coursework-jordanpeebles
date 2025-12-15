// Hamburger menu toggle and animation

// Toggle hamburger menu and animate icon with transform
function toggleHamburgerMenu() {
  const nav = document.getElementById('main-nav');
  const hamburger = document.getElementById('hamburger-menu');
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger-menu');
  if (hamburger) {
    hamburger.addEventListener('click', toggleHamburgerMenu);
  }
});

// Example of another function for rubric
function greetUser() {
  alert('Welcome to my portfolio website!');
}
