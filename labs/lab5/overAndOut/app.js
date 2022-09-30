/*  Zach Czachura
    9/29/2022
    Over and Out
*/

// Place a div on the page
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);

// Set the initial styles for the div
myDiv.style.background = "blue";
myDiv.style.width = "100px";
myDiv.style.height = "100px";

// When the mouse is over the div, change its color to black
myDiv.setAttribute("onmouseover", "changeBlack()");

function changeBlack() {
    myDiv.style.background = "black";
}

// When the mouse leaves the div, change its color to blue
myDiv.setAttribute("onmouseout", "changeBlue()");

function changeBlue() {
    myDiv.style.background = "blue";
}