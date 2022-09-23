/*  Zach Czachura
    9/22/2022
    Bouncing Ball Refactor
*/

// Object to hold the ball
let ball = {
    // Speed properties
    speedX: 5,
    speedY: 5,

    // Size property
    diameter: 50,

    // Location properties
    xPos: 100,
    yPos: 400,

    //Color properties
    ballColR: 227,
    ballColG: 50,
    ballColB: 203
}

// Create a canvas, set color for ball
function setup() {
    createCanvas(800, 600);
    fill(ball.ballColR, ball.ballColG, ball.ballColB);
}

function draw() {
    // Set a neutral background each frame to get rid of previous balls
    background(204);

    // Call update function
    updateBall(ball);    
}

// Function to update the location of the ball using object properties
function updateBall(ball) {
    // If the ball moves too far to the left, change the x velocity
    if(ball.xPos <= 0 + ball.diameter / 2) {
        ball.speedX *= -1;
    }
    // If the ball moves too far to the right, change the x velocity
    if(ball.xPos >= width - ball.diameter / 2) {
        ball.speedX *= -1;
    }
    // If the ball moves too far up, change the y velocity
    if(ball.yPos <= 0 + ball.diameter / 2) {
        ball.speedY *= -1;
    }
    // If the ball moves too far down, change the y velocity
    if(ball.yPos >= height - ball.diameter / 2) {
        ball.speedY *= -1;
    }
    
    // Draw the ball at the current location
    circle(ball.xPos, ball.yPos, ball.diameter);

    // Increment the x and y positions by their respective speeds
    ball.xPos += ball.speedX;
    ball.yPos += ball.speedY;
}