/*  Zach Czachura
    10/27/2022
    Distance Calculator
*/

// Get all four inputs from the page
let x1 = document.getElementById("x1");
let y1 = document.getElementById("y1");
let x2 = document.getElementById("x2");
let y2 = document.getElementById("y2");
// Get the div to output results to
let res = document.getElementById("result");

// Onclick function for the button
function getDist() {
    // Calculate the distance between the two points using the input values
    let distance = calcDist(x1.value, y1.value, x2.value, y2.value);
    // Output the results of the calculation to the div
    res.innerHTML = "The distance between (" + x1.value + ", " + y1.value + ") and (" + x2.value + ", " + y2.value + ") is " + distance + ".";
}

// Function to calculate distance between two points
function calcDist(x1, y1, x2, y2) {
    // Calculate the differences in x and y coordinates
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    // Calculate the distance using the equation
    let d = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

    // Return the distance
    return d;
}