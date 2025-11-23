"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Jordan Peebles
      Date:   11/23/2025

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/
const BALL_RADIUS = 60; // radius of the ball in pixels
const BOX_HEIGHT = 400; // height of the container in pixels
const BOX_WIDTH = 800;  // width of the container in pixels

/*--------------- Object Code --------------------*/

// Object literal for the box
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
};

// Constructor function for the ball class
function ball(size) {
   this.radius = size;
   this.xPos = null;
   this.yPos = null;
   this.xVelocity = null;
   this.yVelocity = null;
}

// Create the moveWithin() method for the ball prototype
ball.prototype.moveWithin = function(container) {
   // a. Set the top and left positions of the ball
   let ballTop = this.yPos;
   let ballLeft = this.xPos;
   
   // b. Set the bottom and left positions of the ball
   let ballBottom = this.yPos + this.radius;
   let ballRight = this.xPos + this.radius;
   
   // c. If ballTop is less than zero or ballBottom is greater than container.height
   if (ballTop < 0 || ballBottom > container.height) {
      // Bounce the ball vertically
      container.yPos += this.yVelocity;
      this.yVelocity = -this.yVelocity;
   }
   
   // d. If ballLeft is less than zero or ballRight is greater than container.width
   if (ballLeft < 0 || ballRight > container.width) {
      // Bounce the ball horizontally
      container.xPos += this.xVelocity;
      this.xVelocity = -this.xVelocity;
   }
   
   // e. Move the ball within the container
   this.yPos += this.yVelocity;
   this.xPos += this.xVelocity;
};







/*---------------Interface Code -----------------*/

// Reference to the container box
let boxImage = document.getElementById("box");
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
boxImage.style.top = "0px";
boxImage.style.left = "0px"

// Reference to the Add Ball button
let addBall = document.getElementById("addBall");

addBall.onclick = function() {
      
   let ballImage = document.createElement("div");
   ballImage.className = "ball";
   ballImage.style.width = BALL_RADIUS + "px";
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   // Append the ball image to the box
   boxImage.appendChild(ballImage);     
   
   // 7. Create an instance of a ball object
   // a. Store an instance of the ball object in a variable named newBall with a size value equal to BALL_RADIUS
   let newBall = new ball(BALL_RADIUS);
   
   // b. Center the newBall within the container
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
   
   // c. Give newBall an initial random velocity
   newBall.yVelocity = rand(-10, 10);
   newBall.xVelocity = rand(-10, 10);
   
   // 8. Animate the motion of newBall
   window.setInterval(function() {
      // a. Apply the moveWithin() method to newBall with box as the container parameter
      newBall.moveWithin(box);
      
      // b. Move the image of the ball
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
      
      // c. Shake the image of the container
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";
   }, 25);
};


/* Function to return a random value between minVal and maxValue */
function rand(minVal, maxVal) {
   let size = maxVal - minVal + 1;
   return minVal + size*Math.random();
}