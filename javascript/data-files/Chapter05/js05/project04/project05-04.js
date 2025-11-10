"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Jordan Peebles
      Date:   11/09/2025

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

// if footnotes array not present, do nothing
if (typeof footnotes === "undefined") {
   console.warn("footnotes array not found (expected in footnotes.js)");
} else {
   for (let i = 0; i < phrases.length; i++) {
      phrases[i].onclick = function () {
         // create heading with clicked phrase text
         const phrase = document.createElement("h1");
         phrase.textContent = this.textContent;

         // create footnote paragraph, styled
         const footnote = document.createElement("p");
         footnote.textContent = footnotes[i];
         footnote.style.fontStyle = "italic";
         footnote.style.fontSize = "1.2em";

         // create close button, styled
         const closeButton = document.createElement("input");
         closeButton.type = "button";
         closeButton.value = "Close Footnote";
         closeButton.style.display = "block";
         closeButton.style.margin = "10px auto";

         // open popup window
         const popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");

         // style popup body
         popup.document.body.style.backgroundColor = "ivory";
         popup.document.body.style.fontSize = "16px";
         popup.document.body.style.padding = "10px";

         // append elements to popup
         popup.document.body.appendChild(phrase);
         popup.document.body.appendChild(footnote);
         popup.document.body.appendChild(closeButton);

         // close handler
         closeButton.onclick = function () {
            popup.close();
         };
      };
   }
}

