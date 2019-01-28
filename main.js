'use strict';

const submitBtn = document.getElementById('submit');
const nav = document.getElementsByClassName('fa-bars')[0].parentElement;
const navMenu = nav.lastElementChild;

// Define viewportWidth
var viewportWidth;
// Set mobile menu to initially be inactive
var MobileMenuActive = false;

// Events
submitBtn.addEventListener('click', changeName);
nav.addEventListener('click', toggleMenu);
window.addEventListener('resize', checkMenu, false);

// Perform initial check 
checkMenu();

// Function to setup menu depending on viewport width
function checkMenu() {
  setViewportWidth();
  // isMenuVisible();
  // IF the viewport width is greater than 680px...
  if (viewportWidth > 680) {
    // Remove the click event listener on the nav
    nav.removeEventListener('click', toggleMenu);
    // Make sure the menu text is visible 
    showMenu();
  // ELSE set the menu up for mobile and...
  } else {
    // Add the click event listener to the nav
    nav.addEventListener('click', toggleMenu);
    // IF the mobile menu icon has been clicked...
    if (MobileMenuActive) {
      // Show the menu
      showMenu();
    } else {
      // Hide the menu
      hideMenu();
    }
  }
}

function changeName(event) {
  // Get the text that was inputed by the user and assign it to the name variable
  var name = document.getElementById('name').value;
  // Select text that is going to be replaced
  var textToChange = document.getElementById('nameText');
  // Replace old name text with new name text
  textToChange.innerHTML = name;
  // Prevent default page refresh
  event.preventDefault();
}

function toggleMenu() {
  var navIcon = nav.children[0];

  toggleNavMenu();
  toggleIconColor(navIcon);
}

function toggleIconColor(icon) {
  if (icon.style.color === 'white') {
    icon.style.color = 'black';
  } else {
    icon.style.color = 'white';
  }
}

function toggleNavMenu() {
  if (navMenu.style.display === 'none') {
    showMenu();
    MobileMenuActive = true;
  } else {
    hideMenu();
    MobileMenuActive = false;
  }
}

// Make the menu visible
function showMenu() {
  navMenu.style.display = 'block';
}

// Hide the menu
function hideMenu() {
  navMenu.style.display = 'none';
}

// Set/update the viewportWidth value
function setViewportWidth() {
  viewportWidth = window.innerWidth || document.Element.clientWidth;
}