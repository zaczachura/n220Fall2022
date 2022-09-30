/*  Zach Czachura
    9/29/2022
    Peak Pixels
*/

// Declare variables for the size of the square div
let dw = 100;
let dh = 100;

// Place a div on the page
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);

// Set the initial styles for the div
myDiv.style.background = "green";
myDiv.style.width = dw + "px";
myDiv.style.height = dh + "px";

// When the div is clicked, increase its size by 10%
myDiv.setAttribute("onclick", "grow()");

function grow() {
    dw *= 1.1;
    dh *= 1.1;
    myDiv.style.width = dw + "px";
    myDiv.style.height = dh + "px";
}