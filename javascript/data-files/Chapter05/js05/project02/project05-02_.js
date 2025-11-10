"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Jordan Peebles
      Date:   11/09/2025

      Filename: project05-02.js
*/

// Get DOM elements after page load and wire up click handlers
window.addEventListener("load", () => {
   const images = document.getElementsByTagName("img");
   const photoBucket = document.getElementById("photo_bucket");
   const photoList = document.getElementById("photo_list");

   for (let i = 0; i < images.length; i++) {
      images[i].onclick = function () {
         if (this.parentElement && this.parentElement.id === "photo_bucket") {
            const newItem = document.createElement("li");
            photoList.appendChild(newItem);
            newItem.appendChild(this);
         } else {
            const oldItem = this.parentElement;
            photoBucket.appendChild(this);
            if (oldItem && oldItem.parentElement) {
               oldItem.parentElement.removeChild(oldItem);
            }
         }
      };
   }
});

