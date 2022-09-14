/*  Zach Czachura
    9/15/2022
    Red Remover
*/

// Create canvas for the two circles
function setup() {
    createCanvas(800, 600);       
}

function draw() {
    // Neutral background to see colors better
    background(204);

    // Assign initial color value to variable
    let myColor = color(170, 200, 150);
    // Draw a circle with the initial color
    fill(myColor);
    circle(200, 300, 100);   
    
    // Call the removeRed function to remove the red value and assign new color to a variable
    let noRed = removeRed(myColor);
    // Draw a circle with the new color
    fill(noRed);
    circle(600, 300, 100);
}

function removeRed(colorVar) {
    // Use built in method from the instructions to remove the red value from RGB
    colorVar.setRed(0);
    
    // Return the new color value
    return colorVar;
}