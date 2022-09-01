/*  Zach Czachura
    8/31/2022
    Personal Composition
*/

function setup() {
    // Create canvas to hold the smiley face
    createCanvas(800, 600);
}

function draw() {
    // Variables to store the coordinates of the center of the smiley face
    let centerX = 400;
    let centerY = 300;

    // Neutral background
    background(204);

    // Draw the face
    strokeWeight(3);
    fill(232, 235, 52); // Picked with Google color picker
    circle(centerX, centerY, 400);

    // Draw the smile
    fill(0);
    ellipse(centerX, centerY - 20, 300, 300); // Create a black circle
    strokeWeight(0);
    fill(232, 235, 52);
    ellipse(centerX, centerY - 40, 310, 310); // Overlay a yellow circle slightly above to create smile

    // Draw the sunglasses
    strokeWeight(3);
    fill(0);
    ellipse(centerX - 80, centerY - 50, 140, 90);
    ellipse(centerX + 80, centerY - 50, 140, 90);
    strokeJoin(ROUND);
    rect(250, 200, 140, 50); // Overlay a rectangle above the ellipse to make it look like sunglasses
    rect(410, 200, 140, 50);
    line(230, 185, 250, 210); // Connect the two lenses with lines
    line(550, 210, 570, 185);
    line(centerX - 10, centerY - 70, centerX + 10, centerY - 70);
}