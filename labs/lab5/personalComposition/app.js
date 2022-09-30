/*  Zach Czachura
    9/29/2022
    Personal Composition
*/

// Declare variables for the initial size of the div
let dw = 100;
let dh = 100;

// Declare variables for the initial color of the div
let colR = 100;
let colG = 100;
let colB = 100;

// Place the div on the page
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);

// Set the initial styles and text for the div
myDiv.style.background = "rgb(" + colR + ", " + colG + ", " + colB + ")";
myDiv.style.width = dw + "px";
myDiv.style.height = dh + "px";
myDiv.innerHTML = "RGB: " + colR + ", " + colG + ", " + colB;

// When the div is clicked, randomize its size and color, and change the text to display the current color
myDiv.setAttribute("onclick", "randomize()");

function randomize() {
    // Randomize the size of the div
    dw = Math.random() * 1000;
    dh = Math.random() * 1000;
    myDiv.style.width = dw + "px";
    myDiv.style.height = dh + "px";

    // Randomize the color of the div
    colR = Math.floor(Math.random() * 256);
    colG = Math.floor(Math.random() * 256);
    colB = Math.floor(Math.random() * 256);
    myDiv.style.background = "rgb(" + colR + ", " + colG + ", " + colB + ")";
    
    // Update the text to show the current color values
    myDiv.innerHTML = "RGB: " + colR + ", " + colG + ", " + colB;
}