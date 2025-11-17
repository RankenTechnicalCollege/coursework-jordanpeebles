"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Jordan Peebles
      Date:   11/16/2025

      Filename: project06-02.js
*/

// Run when the page loads
window.addEventListener("load", function() {
   // Step 4: Select all <select> elements inside form#govLinks
   let allSelect = document.querySelectorAll("form#govLinks select");

   // Step 5: Loop through all select elements
   for (let i = 0; i < allSelect.length; i++) {
      // Step 5a: Add onchange event handler with evt parameter
      allSelect[i].onchange = function(evt) {
         // Step 5b: Get the value of the selected option
         let linkURL = evt.target.value;
         // Step 5c: Open the link in a new window/tab
         if (linkURL) {
            let newWin = window.open(linkURL);
         }
      };
   }
});


