"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Jordan Peebles 
      Date:   11/09/2025

      Filename: project05-03.js
*/

window.addEventListener("load", () => {
   const sourceDoc = document.getElementById("source_doc");
   const toc = document.getElementById("toc");
   let headingCount = 1;
   const heading = "H2";

   for (let n = sourceDoc.firstChild; n !== null; n = n.nextSibling) {
      if (n.nodeName === heading) {
         // create anchor target inside the heading
         const anchor = document.createElement("a");
         anchor.setAttribute("name", "doclink" + headingCount);
         anchor.setAttribute("id", "doclink" + headingCount);
         n.insertBefore(anchor, n.firstChild);

         // create list item with link
         const listItem = document.createElement("li");
         const link = document.createElement("a");
         listItem.appendChild(link);

         link.textContent = n.textContent;
         link.href = "#doclink" + headingCount;

         toc.appendChild(listItem);
         headingCount++;
      }
   }
});

