/*  Zach Czachura
    9/22/2022
    Data-Driven Display w/ Function
*/

// Create canvas for the rainbow
function setup() {
    createCanvas(800, 600);       
}

function draw() {
    // Neutral background
    background(204);

    // Define a rainbow object
    let rainbow = {
        // Properties for the colors
        colRed: color(232, 23, 23),
        colOrange: color(243, 136, 30),
        colYellow: color(222, 229, 24),
        colGreen: color(23, 171, 33),
        colBlue: color(30, 18, 198),
        colPurple: color(192, 32, 216),

        // Property to create a hole at the bottom
        colBackground: 204,

        // Properties for the location of the rainbow
        xPos: 400,
        yPos: 400,

        // Properties for the size of the rainbow
        rbHeight: 400,
        rbWidth: 400,
        colWidth: 30
    }

    // Call the function to draw the rainbow with object as argument
    drawRainbow(rainbow);
}

// Function to draw the rainbow
function drawRainbow(rb) {
    // Draw each band of the rainbow using arcs, from outside in
    fill(rb.colRed);
    arc(rb.xPos, rb.yPos, rb.rbWidth, rb.rbHeight, PI, 2 * PI, PIE);

    fill(rb.colOrange);
    arc(rb.xPos, rb.yPos, rb.rbWidth - rb.colWidth, rb.rbHeight - rb.colWidth, PI, 2 * PI, PIE);

    fill(rb.colYellow);
    arc(rb.xPos, rb.yPos, rb.rbWidth - 2 * rb.colWidth, rb.rbHeight - 2 * rb.colWidth, PI, 2 * PI, PIE);

    fill(rb.colGreen);
    arc(rb.xPos, rb.yPos, rb.rbWidth - 3 * rb.colWidth, rb.rbHeight - 3 * rb.colWidth, PI, 2 * PI, PIE);

    fill(rb.colBlue);
    arc(rb.xPos, rb.yPos, rb.rbWidth - 4 * rb.colWidth, rb.rbHeight - 4 * rb.colWidth, PI, 2 * PI, PIE);

    fill(rb.colPurple);
    arc(rb.xPos, rb.yPos, rb.rbWidth - 5 * rb.colWidth, rb.rbHeight - 5 * rb.colWidth, PI, 2 * PI, PIE);

    // Draw a final arc the same color as the background so it looks like a rainbow
    fill(rb.colBackground);
    arc(rb.xPos, rb.yPos + 1, rb.rbWidth - 6 * rb.colWidth, rb.rbHeight - 6 * rb.colWidth, PI, 2 * PI, OPEN);
}