/* JavaScript 7th Edition
   Chapter 3
   Hands-on Project 3-2

   Author: Jordan Peebles
   Date:   11/02/2025

   Filename: project03-02.js
*/

// captions array (14 entries)
var captions = [
  "Earthrise over the Pacific Ocean",
  "City lights on the night side",
  "Aurora over the polar region",
  "Cloud patterns and coastlines",
  "Large river delta from orbit",
  "Mountain range and snow fields",
  "Desert landscape from space",
  "Ocean swirls and currents",
  "Sun glint on the water",
  "Coastal city and harbor",
  "Island chain and reefs",
  "River meanders and floodplain",
  "Ice sheet and glaciers",
  "Atmospheric limb at sunrise"
];

// build HTML for the gallery (images are in the "images" folder)
var htmlCode = "";
var imgFolder = "images/"; // images/slide0.jpg ... images/slide13.jpg

for (var i = 0; i < captions.length; i++) {
    var imgSrc = imgFolder + "slide" + i + ".jpg";
    htmlCode += '<figure>';
    htmlCode += '<img src="' + imgSrc + '" alt="Slide ' + i + '" onerror="this.style.opacity=.4; console.error(\'Missing image:\', this.src)">';
    htmlCode += '<figcaption>' + captions[i] + '</figcaption>';
    htmlCode += '</figure>';
}

var gallery = document.getElementById("gallery");
if (gallery) {
    gallery.innerHTML = htmlCode;
} else {
    console.error("Element with id 'gallery' not found. Open project03-02.html and ensure the #gallery element exists.");
}