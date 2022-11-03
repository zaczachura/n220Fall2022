/*  Zach Czachura
    11/03/2022
    Change Styles
*/

// Get the divs from the page
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

// Onclick function for the first div
function clickDiv1() {
    // Call the changeStyle function with the first div as argument
    changeStyle(div1);
}

// Onclick function for the second div
function clickDiv2() {
    // Call the changeStyle function with the second div as argument
    changeStyle(div2);
}

// Onclick function for the third div
function clickDiv3() {
    // Call the changeStyle function with the third div as argument
    changeStyle(div3);
}

// Function to change the style of a div given as a parameter
function changeStyle(div) {
    // Lower the width
    div.style.width = "100px";
    // Set the color to blue
    div.style.background = "blue";
}