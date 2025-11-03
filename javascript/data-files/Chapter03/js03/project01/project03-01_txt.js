/* JavaScript 7th Edition
   Chapter 3
   Hands-on Project 3-1

   Author: Jordan Peebles
   Date:   11/02/2025

   Filename: project03-01.js
*/

var menuItems = document.getElementsByClassName("menuItem");

for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", calcTotal);
}

function calcTotal() {
    var orderTotal = 0;
    for (var i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}