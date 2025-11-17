"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Jordan Peebles
      Date:   11/16/2025

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

// Run the countdown() function every 1000 milliseconds
setInterval(countdown, 1000);

// Create the countdown function
function countdown() {
   // Declare now variable and store current date and time
   let now = new Date();
   
   // Display current date and time in currentTime object
   currentTime.textContent = now.toLocaleString();
   
   // Declare newYear variable and store January 1, 2024
   let newYear = new Date("January 1, 2026");
   
   // Retrieve 4-digit year from now, increase by 1, store in nextYear
   let nextYear = now.getFullYear() + 1;
   
   // Change the year value of newYear to nextYear
   newYear.setFullYear(nextYear);
   
   // Calculate days left
   let daysLeft = (newYear - now) / (1000*60*60*24);
   
   // Multiply fractional part of daysLeft by 24, store in hrsLeft
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   
   // Multiply fractional part of hrsLeft by 60, store in minsLeft
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   
   // Multiply fractional part of minsLeft by 60, store in secsLeft
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
   
   // Display the results
   daysLeftBox.textContent = Math.floor(daysLeft);
   hrsLeftBox.textContent = Math.floor(hrsLeft);
   minsLeftBox.textContent = Math.floor(minsLeft);
   secsLeftBox.textContent = Math.floor(secsLeft);
}