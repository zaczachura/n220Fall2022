/*  Zach Czachura
    9/15/2022
    Polar Points
*/

// Create a canvas to display the circles
function setup() {
    createCanvas(200, 200);       
}

function draw() {
    // Get new coordinates from the polarPoint function
    let res = polarPoint(25);

    // Neutral background that erases previous circles
    background(204);
    // Move the origin inward
    translate(100, 100);

    // Draw circles based on polarPoint function output
    circle(res.x, res.y, 10);
}

// Creates polar coordinates based on the horizontal location of the mouse
function polarPoint(r) {
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    // Returns object with new coordinate values
    return createVector(x, y); 
}