"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Hands-on Project 6-1

      Author: Jordan Peebles
      Date:  11/16/2025 

      Filename: project06-01.js
*/

// Step 2/3: Reference elements
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// Step 4: Add click event listener to submitButton
submitButton.addEventListener("click", function(e) {
   // Step 5a: Check password pattern
   let pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   if (!pattern.test(pwd.value)) {
      pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
      pwd.reportValidity();
      e.preventDefault();
   }
   // Step 5b: Check if passwords match
   else if (pwd.value !== pwd2.value) {
      pwd2.setCustomValidity("Your passwords must match.");
      pwd2.reportValidity();
      e.preventDefault();
   }
   // Step 5c: Clear validation message if all is good
   else {
      pwd.setCustomValidity("");
      pwd2.setCustomValidity("");
   }
});

