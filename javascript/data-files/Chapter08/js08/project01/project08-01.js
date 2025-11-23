"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Jordan Peebles
      Date:   11/23/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for timer object
function timer(min, sec) {
   this.minutes = min;
   this.seconds = sec;
   this.timeID = null;
}

// Add runPause() method to timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
   if (timer.timeID) {
      // Pause the timer
      window.clearInterval(timer.timeID);
      timer.timeID = null;
   } else {
      // Start the timer
      timer.timeID = window.setInterval(countdown, 1000);
   }
}

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// countdown() function
function countdown() {
   if (myTimer.seconds > 0) {
      myTimer.seconds -= 1;
   } else if (myTimer.minutes > 0) {
      myTimer.minutes -= 1;
      myTimer.seconds = 59;
   } else {
      // Timer has reached 0:0
      window.clearInterval(myTimer.timeID);
      myTimer.timeID = null;
   }
   
   // Update the display
   minBox.value = myTimer.minutes;
   secBox.value = myTimer.seconds;
}

// Create an instance of the timer object
let myTimer = new timer(minBox.value, secBox.value);

// onchange event handler for minBox
minBox.onchange = function() {
   myTimer.minutes = minBox.value;
}

// onchange event handler for secBox
secBox.onchange = function() {
   myTimer.seconds = secBox.value;
}

// onclick event handler for runPauseTimer button
runPauseTimer.onclick = function() {
   myTimer.runPause(myTimer, minBox, secBox);
}

