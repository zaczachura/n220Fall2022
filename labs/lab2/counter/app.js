// Initialize a variable for the counter starting at 0
var count = 0;

// Since the output goes to the console, nothing is needed in setup
function setup() {

}

function draw() {
    // Output the current value of the counter to the console
    console.log(count);

    // Increment the counter by 1 each frame
    count += 1;
}