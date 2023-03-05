// Get the hamburger icon and the navigation menu
const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

// Add a click event listener to the hamburger icon
menuIcon.addEventListener("click", function() {
  // Toggle the "active" class on the hamburger icon and the navigation menu
  menuIcon.classList.toggle("active");
  navMenu.classList.toggle("active");
});
