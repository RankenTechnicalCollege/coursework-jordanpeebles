"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Hands-on Project 6-4

      Project to filter selection lists for vehicle make/model/trim
      Author: Jordan Peebles
      Date:   11/16/2025

      Filename: project06-04.js
*/

// Get references to selection lists and button
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");
let selectVehicle = document.getElementById("selectVehicle");
let vehicle = document.getElementById("vehicle");

// Show all options in a select list
function showAll(selectList) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
      options[i].style.display = "block";
   }
}

// Filter options in a select list by category (className)
function filterSelect(selectList, category) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
      if (options[i].className === category) {
         options[i].style.display = "block";
      } else {
         options[i].style.display = "none";
      }
   }
   // Always show the first option (e.g., "Select Model" or "Select Trim")
   options[0].style.display = "block";
   selectList.selectedIndex = 0;
}

// When Make changes, filter Model options
make.onchange = function() {
   let selectedMake = make.options[make.selectedIndex].text;
   if (selectedMake === "Select Make") {
      showAll(model);
      showAll(trim);
   } else {
      filterSelect(model, selectedMake);
      showAll(trim);
   }
};

// When Model changes, filter Trim options
model.onchange = function() {
   let selectedModel = model.options[model.selectedIndex].text;
   if (selectedModel === "Select Model") {
      showAll(trim);
   } else {
      filterSelect(trim, selectedModel);
   }
};

// When Select button is clicked, show selected vehicle
selectVehicle.onclick = function() {
   let makeText = make.options[make.selectedIndex].text;
   let modelText = model.options[model.selectedIndex].text;
   let trimText = trim.options[trim.selectedIndex].text;
   if (
      makeText === "Select Make" ||
      modelText === "Select Model" ||
      trimText === "Select Trim"
   ) {
      vehicle.textContent = "Please select a make, model, and trim.";
   } else {
      vehicle.textContent = makeText + " " + modelText + " " + trimText;
   }
};

