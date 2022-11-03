/*  Zach Czachura
    11/03/2022
    Make Random
*/

// Get the div to output results to
let res = document.getElementById("result");

// Onclick function for the button
function updateDiv() {
    // Call function to generate a random number
    let num = genNum();
    // Output the random number to the div
    res.innerHTML = num;
}

// Function to generate a random number between 0 and 10
function genNum() {
    let num = Math.floor(Math.random() * 11);
    return num;
}