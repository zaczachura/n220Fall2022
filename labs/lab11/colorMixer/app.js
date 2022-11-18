/*  Zach Czachura
    11/17/2022
    Color Mixer
*/

// Initialize variables for the RGB color values, start with black
let r = 0;
let g = 0;
let b = 0;

// Get the elements from the page
let example = document.getElementById("example");
let desc = document.getElementById("desc");
let buttons = document.getElementsByClassName("color");

// Add event listeners for a click on each of the buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", changeColor);
}

// Function to increment the RGB value by an amount
function changeColor(event) {
    // Get the amount to increase by, cast as a number
    let inc = Number(event.target.dataset.inc);
    // Get the RGB value to increase
    let col = event.target.dataset.col;

    // Increase R value
    if (col == "r") {
        r += inc;
        if (r > 255) {
            r = 255;
        }
    }
    // Increase G value
    if (col == "g") {
        g += inc;
        if (g > 255) {
            g = 255;
        }
    }
    // Increase B value
    if (col == "b") {
        b += inc;
        if (b > 255) {
            b = 255;
        }
    }

    // Change the color of the div to the new value
    example.style.background = `rgb(${r}, ${g}, ${b})`;
    // Update the descriptive div to show the current RGB values
    desc.innerHTML = "current color: " + `rgb(${r}, ${g}, ${b})`;
}