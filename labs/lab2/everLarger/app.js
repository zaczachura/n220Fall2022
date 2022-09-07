// Initialize a variable for the diameter starting at 1
var diameter = 1;

// Create a canvas, set color for circle
function setup() {
    createCanvas(800, 600);
    fill(252, 249, 23);
}

function draw() {
    // Set a neutral background each frame to get rid of previous circles
    background(204);
    
    // Once the circle reaches a diameter of 200, set its diameter back to 1
    if(diameter > 200) {
        diameter = 1;
    }
    
    // Draw the circle at the center of the screen with the current diameter
    circle(width / 2, height / 2, diameter);

    // Increment the diameter by 1
    diameter += 1;    
}