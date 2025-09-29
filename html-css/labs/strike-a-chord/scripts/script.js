/*
    Name: Jordan Peebles
    File: script.js
    Date: September 29, 2025
    Description: JavaScript for Strike a Chord music site
*/

// Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu) {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    }
}

// Close the menu when clicking outside
document.addEventListener("click", function(e) {
    var menu = document.getElementById("menu-links");
    var menuIcon = document.querySelector(".menu-icon");
    if (menu && menuIcon && menu.style.display === "block") {
        // Only close if click is outside both menu and menu icon
        if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
            menu.style.display = "none";
        }
    }
});