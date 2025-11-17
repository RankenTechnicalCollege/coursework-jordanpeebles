"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Hands-on Project 6-3

      Project to copy shipping address to billing address and validate form
      Author: Jordan Peebles
      Date:   11/16/2025

      Filename: project06-03.js
*/

// Step 2/3: Reference the "Same as Shipping Address" checkbox
let useShip = document.getElementById("useShip");

// Step 3: Add event listener to run copyShippingToBilling when clicked
useShip.addEventListener("click", copyShippingToBilling);

// Step 4: Function to copy shipping fields to billing fields
function copyShippingToBilling() {
   if (useShip.checked) {
      document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
      document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
      document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
      document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
      document.getElementById("cityBill").value = document.getElementById("cityShip").value;
      document.getElementById("countryBill").value = document.getElementById("countryShip").value;
      document.getElementById("codeBill").value = document.getElementById("codeShip").value;
      // Step 4c: Copy state dropdown by selectedIndex
      document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
   }
}

// Step 5a: Get all text input fields in the form
let formElements = document.querySelectorAll("input[type='text']");
// Step 5b: Get the number of fields
let fieldCount = formElements.length;
// Step 5c: Reference the error box
let errorBox = document.getElementById("errorBox");

// Step 6: Add invalid event listeners to all text fields
for (let i = 0; i < fieldCount; i++) {
   formElements[i].addEventListener("invalid", showValidationError);
}

// Step 7: Function to show validation error
function showValidationError(evt) {
   evt.preventDefault();
   errorBox.textContent = "Complete all highlighted fields";
}
