// Initialize a variable for the width of the canvas
var w = 400;

// Create a canvas, the width can be adjusted with a global variable
function setup() {
    createCanvas(w, 300);
}

function draw() {
    // Set a neutral background each frame to get rid of previous circles
    background(204);

    // If the mouse is on the right side of the canvas, fill with red
    if(mouseX > width / 2) {
        fill(176, 22, 11);
    } else { // If the mouse is on the left side of the canvas, fill with blue
        fill(22, 12, 204);
    }

    // Draw a circle at the mouse location with diameter 50
    circle(mouseX, mouseY, 50);
}