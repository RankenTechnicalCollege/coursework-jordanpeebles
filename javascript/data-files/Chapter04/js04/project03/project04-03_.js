"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Jordan Peebles
      Date:   11/-09/2025

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// increase max allowed characters
const MAX_COUNT = 1000;

// cached element references
let commentBox, wordCountBox, warningBox;

window.addEventListener("load", () => {
    commentBox = document.getElementById("comment");
    wordCountBox = document.getElementById("countValue");
    warningBox = document.getElementById("warningBox");

    commentBox.addEventListener("input", updateCount);
    updateCount();
});

function updateCount() {
    // compute character count
    let charCount = commentBox.value.length;

    // clear previous warning
    warningBox.innerHTML = "";

    // try / catch / finally to enforce limit and always update count display
    try {
        if (charCount > MAX_COUNT) {
            throw "You have exceeded the character count limit";
        }
    } catch (err) {
        warningBox.innerHTML = err;
    } finally {
        wordCountBox.innerHTML = charCount;
    }
}

// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}