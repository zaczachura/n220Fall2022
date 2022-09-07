/*  Zach Czachura
    9/8/2022
    Ball Bounce
*/

// Initialize variables for speed in both directions
var speedX = 5;
var speedY = 5;

// Initialize a variable for the diameter of the ball
var diameter = 50;

// Initialize variables for the starting location of the ball
var x = diameter / 2 + 10;
var y = 400;

// Create a canvas, set color for ball
function setup() {
    createCanvas(800, 600);
    fill(227, 50, 203);
}

function draw() {
    // Set a neutral background each frame to get rid of previous balls
    background(204);

    // If the ball moves too far to the left, change the x velocity
    if(x <= 0 + diameter / 2) {
        speedX *= -1;
    }
    // If the ball moves too far to the right, change the x velocity
    if(x >= width - diameter / 2) {
        speedX *= -1;
    }
    // If the ball moves too far up, change the y velocity
    if(y <= 0 + diameter / 2) {
        speedY *= -1;
    }
    // If the ball moves too far down, change the y velocity
    if(y >= height - diameter / 2) {
        speedY *= -1;
    }
    
    // Draw the ball at the current location
    circle(x, y, diameter);

    // Increment the x and y positions by their respective speeds
    x += speedX;
    y += speedY;
}