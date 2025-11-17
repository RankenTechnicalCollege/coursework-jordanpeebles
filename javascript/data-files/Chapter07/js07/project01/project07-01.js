"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Jordan Peebles
      Date:   11/17/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   
   // Prevent default form submission
   e.preventDefault();
   
   // Create regular expression variables
   let regex1 = /[A-Z]/;  // Matches any uppercase letter A through Z
   let regex2 = /\d/;      // Matches any single digit
   let regex3 = /[!$#%]/; // Matches symbols !$#%
   
   // Validate password with if else statement
   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters.";
   } else if (regex1.test(pwd) === false) {
      feedback.textContent = "Your password must include an uppercase letter.";
   } else if (regex2.test(pwd) === false) {
      feedback.textContent = "Your password must include a number.";
   } else if (regex3.test(pwd) === false) {
      feedback.textContent = "Your password must include one of the following: !$#%.";
   } else {
      signupForm.submit();
   }
}
);