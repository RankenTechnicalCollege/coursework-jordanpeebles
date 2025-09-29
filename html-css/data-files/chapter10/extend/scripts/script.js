/*
    Student Name: Jordan Peebles
    File Name: script.js
    Date: September 29, 2025
*/

$(document).ready(function() {
    // Hide paragraphs when the "Hide" button is clicked
    $("button:contains('Hide')").click(function() {
        $("#main p").hide();
    });

    // Show paragraphs when the "Show" button is clicked
    $("button:contains('Show')").click(function() {
        $("#main p").show();
    });
});