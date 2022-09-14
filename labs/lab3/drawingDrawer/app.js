/*  Zach Czachura
    9/15/2022
    Drawing Drawer
*/

// Create the canvas for my composition
function setup() {
    createCanvas(800, 600);
}

function draw() {
    // Set a neutral background and overwrite previous drawings
    background(204);
    // Call the function to draw the rocket with coordinates at the location of the mouse
    drawRocket(mouseX, mouseY);
}

function drawRocket(x, y) {
    fill(3, 102, 252); // Color with blue
    rect(x - 15, y - 45, 30, 90); // Rocket body
    triangle(x - 15, y - 45, x, y - 80, x + 15, y - 45); // Top of the rocket
    triangle(x - 15, y, x - 30, y + 45, x - 15, y + 45); // Left wing
    triangle(x + 15, y, x + 30, y + 45, x + 15, y + 45); // Right wing
    fill(171, 5, 5); // Color with red
    triangle(x - 15, y + 45, x, y + 150, x + 15, y + 45); // Outer fire
    fill(222, 95, 27); // Color with orange
    triangle(x - 15, y + 45, x, y + 90, x + 15, y + 45); // Inner fire
}