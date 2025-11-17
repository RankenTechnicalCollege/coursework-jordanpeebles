"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Jordan Peebles
      Date:   11/17/2025

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

// Add onclick handler for addButton
addButton.onclick = function() {
   // Use push() to add customerName value to end of customers array
   customers.push(customerName.value);
   
   // Run generateCustomerList() to update the ordered list
   generateCustomerList();
   
   // Change status text to "customer added to the end of the queue"
   status.textContent = customerName.value + " added to the end of the queue";
};

// Add onclick handler for searchButton
searchButton.onclick = function() {
   // Use indexOf() to locate the index where customerName value appears
   // Add 1 to index and store in place variable
   let place = customers.indexOf(customerName.value) + 1;
   
   // If place equals 0, change status text
   if (place === 0) {
      status.textContent = "customer is not found in the queue" + " where " + customerName.value + " is the value of the customerName object";
   } else {
      // Otherwise change status text to "customer found in position place of the queue"
      status.textContent = "customer found in position " + place + " of the queue" + " where " + place + " is the value of the place variable";
   }
};

// Add onclick handler for removeButton
removeButton.onclick = function() {
   // Use indexOf() to locate index of customerName value, store in index variable
   let index = customers.indexOf(customerName.value);
   
   // If index is not equal to -1
   if (index !== -1) {
      // Use splice() to remove one item from customers array at index position
      customers.splice(index, 1);
      
      // Change status text to "customer removed from the queue"
      status.textContent = "customer removed from the queue";
      
      // Call generateCustomerList() function
      generateCustomerList();
   } else {
      // Otherwise change status text to "customer is not found in the queue"
      status.textContent = "customer is not found in the queue";
   }
};

// Add onclick handler for topButton
topButton.onclick = function() {
   // Apply shift() to remove first item from customers array
   // Store returned value in topCustomer variable
   let topCustomer = customers.shift();
   
   // Change status text to "Top customer from the queue"
   status.textContent = "Top customer " + topCustomer + " from the queue" + " where Top Customer is the value of the topCustomer variable";
   
   // Call generateCustomerList() function
   generateCustomerList();
};
   generateCustomerList();
};