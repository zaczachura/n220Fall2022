/*  Zach Czachura
    11/17/2022
    Color Changer
*/

// Get the divs from the page
let rDiv = document.getElementById("rDiv");
let gDiv = document.getElementById("gDiv");
let bDiv = document.getElementById("bDiv");

// Add event listeners for clicks on each div to call changeColor function
rDiv.addEventListener("click", changeColor);
gDiv.addEventListener("click", changeColor);
bDiv.addEventListener("click", changeColor);

// Function that changes the color of an element
function changeColor(event) {
    // Access the dataset of the element and get the color
    let col = event.target.dataset.color;
    // Change the color of the element
    event.target.style.background = col;
}