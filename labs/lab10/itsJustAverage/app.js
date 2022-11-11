/*  Zach Czachura
    11/10/2022
    It's Just Average
*/

// Get the input from the page
let numsIn = document.getElementById("nums");
// Get the div to output results to
let resDiv = document.getElementById("result");

// Onclick function to calculate the sum and average
function calc() {
    // Get the value of the input
    let nums = numsIn.value;
    // Split the string into an array of numbers around commas
    let numsArray = nums.split(",");
    // Initialize sum variable at 0
    let sum = 0;
    // Loop through the array of numbers
    for (let i = 0; i < numsArray.length; i++) {
        // Cast each element as a number
        numsArray[i] = Number(numsArray[i]);
        // Add each number to the sum
        sum += numsArray[i];
    }
    // Divide sum by size of array to get average
    let average = sum / numsArray.length;
    // Output results to the div
    resDiv.innerHTML = "Sum: " + sum + " Average: " + average;
    // Blank out the input for the user
    numsIn.value = "";
}