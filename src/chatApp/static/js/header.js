// JavaScript for Header Interaction

// Selecting the elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

// Adding event listener for menu button click
menuBtn.addEventListener('click', () => {
  // Toggling the 'active' class on the menu element
  menu.classList.toggle('active');
});
