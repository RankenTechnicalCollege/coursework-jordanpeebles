"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-05

      Project to create a Concentration game with flipping tiles
      Author: Jordan Peebles
      Date:   11/09/2025

      Filename: project05-05.js
*/

// References will be obtained after DOM loads
let board;
let allTiles;

// Objects that will reference the first and second tile clicked by the player
let firstFlipped = null;
let secondFlipped = null;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration);

// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   board = document.getElementById("board");
   allTiles = document.getElementsByClassName("tile");

   // iterate over tiles and insert a random tile before the current one
   for (let i = 0; i < allTiles.length; i++) {
      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length * Math.random());

      // Randomly insert a tile before the current tile in the loop
      // use insertBefore on the board element
      board.insertBefore(board.children[randomIndex], board.children[i]);
   }
}


// Function that sets up the game play
function playConcentration() {
   board = document.getElementById("board");
   allTiles = document.getElementsByClassName("tile");

   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {

      // Run when a tile is clicked
      allTiles[i].onclick = function() {
         // only allow flipping when the tile is face down and less than two are flipped
         if (this.lastElementChild && this.lastElementChild.className === "back" && tilesFlipped < 2) {

            tilesFlipped++;  // increase the flip count by 1

            if (tilesFlipped === 1) {
               // if this is the first tile clicked then flip it
               firstFlipped = this;
               firstFlipped.appendChild(firstFlipped.firstElementChild);
            } else if (tilesFlipped === 2) {
               // if this is the second tile clicked then flip it
               // and then flip both tiles back after 1 second
               secondFlipped = this;
               secondFlipped.appendChild(secondFlipped.firstElementChild);

               // wait 1 second before checking/matching
               timeID = window.setTimeout(flipBack, 1000);
            }
         }
      };
   }

   /* Function to flip the two tiles if they don't match */
   function flipBack() {
      // test to determine whether the tile images don't match
      if (firstFlipped && secondFlipped && firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {

         // if they don't match, then flip each one back
         firstFlipped.appendChild(firstFlipped.firstElementChild);
         secondFlipped.appendChild(secondFlipped.firstElementChild);
      }

      // Reset the tiles flipped counter and temporary references
      firstFlipped = null;
      secondFlipped = null;
      tilesFlipped = 0;
   }
}


