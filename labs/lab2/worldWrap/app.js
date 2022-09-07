// Initialize a variable for the x-location of the ball, start at 50
var ballLoc = 50;

// Create a canvas, set color for ball
function setup() {
    createCanvas(800, 600);
    fill(149, 235, 52);
}

function draw() {
    // Set a neutral background each frame to get rid of previous circles
    background(204);

    // When the circle reaches or exceeds 800 pixels to the right, reset the x-location to 0
    if(ballLoc >= 800) {
        ballLoc = 0;
    }

    // Draw a circle at the variable x-location with a constant height and diameter
    circle(ballLoc, 300, 50);

    // Increment the x-location variable, moving the ball to the right by 5
    ballLoc += 5;
}