"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Jordan Peebles
      Date:   11/23/2025

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/

// Create cart object literal
let cart = {
   items: [],
   addItem: function(foodItem) {
      this.items.push(foodItem);
   }
};

// Constructor function for Pizza object class
function Pizza(size, crust) {
   this.size = size;
   this.crust = crust;
   this.toppings = [];
}

// Constructor function for Topping object class
function Topping(name, side) {
   this.name = name;
   this.side = side;
}

// Add addTopping method to Pizza prototype
Pizza.prototype.addTopping = function(topping) {
   this.toppings.push(topping);
};

// Add addToCart method to Pizza prototype
Pizza.prototype.addToCart = function(cart) {
   cart.items.push(this);
};

// Add summarize method to Pizza prototype
Pizza.prototype.summarize = function() {
   let summary = "Pizza: ";
   summary += this.size + " " + this.crust;
   
   for (let i = 0; i < this.toppings.length; i++) {
      summary += " " + this.toppings[i].name + " (" + this.toppings[i].side + ")";
   }
   
   return summary;
};












/*----------------------------- Interface Code -------------------------*/

let pizzaPreviewBox = document.getElementById("previewBox");         // pizza image 
let pizzaSizeBox = document.getElementById("pizzaSize");             // pizza size selection
let pizzaCrustBox = document.getElementById("pizzaCrust");           // pizza crust selection 
let toppingOptions = document.querySelectorAll("input.topping");     // pizza topping option buttons
let addToCart = document.getElementById("addToCart");                // Add to Cart button
let cartBox = document.getElementById("cart");                       // Shopping cart box


// Add event handlers for the pizza toppings   
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
} 

// Event Handler for the addToCart button
addToCart.onclick = updateCart;


// Clear the pizza image
function clearPizzaImage() {
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

// Unselect all toppings
function clearToppings() {
   let noTopping = document.querySelectorAll("input.topping[value='none']");
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

/* Function to draw the pizza image  */
function drawPizza() {
   // Erase current pizza image
   clearPizzaImage();
   // Determine which toppings have been checked
   let checkedToppings = document.querySelectorAll("input.topping:checked");  

   // Draw the individual toppings
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let toppingImage = document.createElement("img");
         toppingImage.src = checkedToppings[i].name + ".png";
         toppingImage.className = checkedToppings[i].value;
         pizzaPreviewBox.appendChild(toppingImage);                                  
      }
   }      
}



// Function to build the pizza
function buildPizza() {
   let checkedToppings = document.querySelectorAll("input.topping:checked"); 

   // Create an instance of a Pizza object
   let myPizza = new Pizza(pizzaSizeBox.value, pizzaCrustBox.value);
   
   // Add the selected toppings to the pizza
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         let myTopping = new Topping(checkedToppings[i].name, checkedToppings[i].value);
         myPizza.addTopping(myTopping);
      }
   }
   
   return myPizza;
}

// Function to add the built pizza to the shopping cart
function updateCart() {
   // Run the buildPizza() function, storing the result in myPizza variable
   let myPizza = buildPizza();
   
   // Apply the addToCart(cart) method to myPizza
   myPizza.addToCart(cart);
   
   // Run the console.log(cart) method to write the contents of the cart object to the debugger console
   console.log(cart);
   
   // Create a paragraph element containing the value of summarize(myPizza)
   let cartParagraph = document.createElement("p");
   cartParagraph.textContent = myPizza.summarize();
   
   // Use the appendChild() method to append the paragraph to the cartBox element
   cartBox.appendChild(cartParagraph);
   
   // Reset the page for the next pizza
   clearPizzaImage();
   clearToppings();
}
