/*
    Jordan Peebles
    September 29, 2025
    File Name: script.js
*/

// Function to display content
function content() {
    var text = document.getElementById("new");

    text.textContent = "Hi. I am a new paragraph that was created with a JavaScript function.";
    text.style.color = "#c0145f";
    text.style.fontSize = "2em";
}

// Call the function
content();