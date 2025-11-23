"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Jordan Peebles
      Date:   11/23/2025

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function() {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];
   
   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile); 

   // Once the file has finished loading, parse the JSON file
   fr.onload=function(){ 
      // Convert the contents of the JSON data in fr.result into an object named staff
      let staff = JSON.parse(fr.result);
      
      // Call the makeStaffTable() function using staff as the parameter value
      makeStaffTable(staff);
   }
   
};

function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");
   
   // Create a for in loop for the object stored in staff.directory[0]
   for (let prop in staff.directory[0]) {
      // Create a th element named headerCell
      let headerCell = document.createElement("th");
      
      // Store prop as the text content of headerCell
      headerCell.textContent = prop;
      
      // Append headerCell to the headerRow object
      headerRow.appendChild(headerCell);
   }
   
   // After the for in loop completes, append headerRow to the staffTable object
   staffTable.appendChild(headerRow);
   
   // Create table rows containing the property values for each entry in the directory array
   // Add a for loop that loops through the items of staff.directory
   for (let i = 0; i < staff.directory.length; i++) {
      // Create an element node for the tr element and store it in the tableRow variable
      let tableRow = document.createElement("tr");
      
      // Create a for in loop for the properties listed in the staff.directory[i]
      for (let prop in staff.directory[i]) {
         // Create an element node for the td element and store it in the tableCell variable
         let tableCell = document.createElement("td");
         
         // Store the value of staff.directory[i][prop] as the text content of tableCell
         tableCell.textContent = staff.directory[i][prop];
         
         // Append tableCell to the tableRow object
         tableRow.appendChild(tableCell);
      }
      
      // After the for in loop completes, append tableRow to the staffTable object
      staffTable.appendChild(tableRow);
   }
   
   // After the for loop is finished, use the appendChild() method to append staffTable to the containerBox object
   containerBox.appendChild(staffTable);
}