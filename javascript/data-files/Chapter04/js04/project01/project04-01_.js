"use strict";

/*    JavaScript 7th Edition
      Chapter 4
      Hands-on Project 4-1

      Author: Jordan Peebles
      Date:   11/09/2025

      Filename: project04-01.js
*/

// Global constants (fixed values)
const COST_PER_LB = 0.50;    // $0.50 per pound
const COST_PER_MILE = 0.75;  // $0.75 per mile
const SETUP_COST = 500;      // $500 setup and installation

// Cached element references
let wgtBox, distBox, setupBox, totalBox, msgBox;

window.addEventListener("load", () => {
    wgtBox = document.getElementById("wgtBox");
    distBox = document.getElementById("distBox");
    setupBox = document.getElementById("setupBox");
    totalBox = document.getElementById("totalBox");
    msgBox = document.getElementById("msgBox");

    // Wire up events
    wgtBox.addEventListener("input", calcTotal);
    distBox.addEventListener("input", calcTotal);
    setupBox.addEventListener("change", calcTotal);

    calcTotal();
});

function calcTotal() {
    msgBox.innerHTML = "";
    let totalCost = 0;

    // Weight check
    try {
        if (!(wgtBox.value > 0)) {
            throw "!! Enter a positive weight";
        }
        totalCost += wgtBox.value * COST_PER_LB;
    } catch (err) {
        msgBox.innerHTML = err;
        totalBox.innerHTML = "";
        return;
    }

    // Distance check
    try {
        if (!(distBox.value > 0)) {
            throw "!! Enter a positive mileage";
        }
        totalCost += distBox.value * COST_PER_MILE;
    } catch (err) {
        msgBox.innerHTML = err;
        totalBox.innerHTML = "";
        return;
    }

    // Setup/installation
    if (setupBox.checked) {
        totalCost += SETUP_COST;
    }

    totalBox.innerHTML = "$" + totalCost.toFixed(0);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }