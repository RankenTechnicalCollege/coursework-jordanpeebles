"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: Jordan Peebles 
      Date:   11/16/2025

      Filename: project06-05.js
*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();

   // Verify that the user has selected a session to attend
   document.getElementById("regSubmit").addEventListener("click", sessionTest);

   // Recalculate the shopping cart when any field loses the focus
   document.getElementById("fnBox").addEventListener("blur", calcCart);
   document.getElementById("lnBox").addEventListener("blur", calcCart); 
   document.getElementById("groupBox").addEventListener("blur", calcCart);   
   document.getElementById("mailBox").addEventListener("blur", calcCart);   
   document.getElementById("phoneBox").addEventListener("blur", calcCart);   
   document.getElementById("sessionBox").addEventListener("change", calcCart);   
   document.getElementById("banquetBox").addEventListener("blur", calcCart); 
   document.getElementById("mediaCB").addEventListener("click", calcCart);   
});

// Function to verify that a session was selected by the user
function sessionTest(evt) {
   var confSession = document.getElementById("sessionBox");
   // FIX: Use setCustomValidity, not setValidity
   if (confSession.selectedIndex === 0) { // First option is usually "Select a Session"
      confSession.setCustomValidity("Select a Session Package");
      confSession.reportValidity();
      evt.preventDefault();
   } else {
      confSession.setCustomValidity("");
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   let form = document.forms.register;

   // Calculate the banquet cost for all guests 
   let guestCount = form.elements.banquetGuests.value;
   let guestCost = guestCount * 55;
   document.getElementById("regBanquet").textContent = guestCount;

   // Determine the cost of the selected session
   let sessionCost = 0;       // Initial cost of the session
   let sessionChoice = "";    // Initial chosen session

   // FIX: Use selectedIndex, not index
   let selectedSession = document.getElementById("sessionBox").selectedIndex;

   // Retrieve the name and cost of the selected session  
   if (selectedSession > 0) { // First option is usually "Select a Session"
      sessionChoice = form.elements.sessionBox[selectedSession].text;
      sessionCost = Number(form.elements.sessionBox[selectedSession].value);
   }

   // Determine the cost of the media pack
   let mediaCost = 0;      // Initial media cost
   let mediaChoice = "";   // Initial media choice

   // FIX: Use checked, not check
   if (form.elements.mediaCB.checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }

   // Calculate total cost of the conference
   let totalCost = Number(guestCost) + Number(sessionCost) + Number(mediaCost);

   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = form.elements.firstName.value + " " + form.elements.lastName.value;
   document.getElementById("regGroup").textContent = form.elements.group.value;
   document.getElementById("regEmail").textContent = form.elements.email.value;
   document.getElementById("regPhone").textContent = form.elements.phoneNumber.value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regBanquet").textContent = guestCount; 
   document.getElementById("regPack").textContent = mediaChoice;
   // FIX: Correct toLocaleString usage
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
}
