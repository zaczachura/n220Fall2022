/*  Zach Czachura
    9/22/2022
    Reverse Tennis
*/

// First racket object on the left
let racket1 = {
    xPos: 100,
    yPos: 100,
    rWidth: 50,
    rHeight: 150
}

// Second racket object on the right
let racket2 = {
    xPos: 600,
    yPos: 400,
    rWidth: 50,
    rHeight: 150
}

// Create canvas for the blocks
function setup() {
    createCanvas(800, 600);   
}

function draw() {
    // Neutral background
    background(204);

    // Draw both rackets
    drawRacket(racket1);
    drawRacket(racket2);

    // Up arrow moves left up, right down
    if (keyIsDown(UP_ARROW)) {
        racket1.yPos -= 3;
        racket2.yPos += 3;
    }

    // Down arrow moves left down, right up
    if (keyIsDown(DOWN_ARROW)) {
        racket1.yPos += 3;
        racket2.yPos -= 3;
    }
}

// Function to draw the racket objects
function drawRacket(racket) {
    rect(racket.xPos, racket.yPos, racket.rWidth, racket.rHeight);
}