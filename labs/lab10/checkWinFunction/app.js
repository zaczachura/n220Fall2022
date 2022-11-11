/*  Zach Czachura
    11/10/2022
    Check Win Function
*/

// Get the input from the page
let numsIn = document.getElementById("nums");
// Get the div to output results to
let resDiv = document.getElementById("result");

// Onclick function to update page with results
function updateDiv() {
    // Get the value of the input
    let nums = numsIn.value;
    // Split the string into an array of numbers around commas
    let numsArray = nums.split(",");
    // Call the function to check for winners and pass array
    let hasWon = checkWin(numsArray);
    // Update results div with correct output depending on checkWin function return value
    if (hasWon) {
        resDiv.innerHTML = "winner";
    } else {
        resDiv.innerHTML = "not winner";
    }
}

// Function to check for a winner, accepts an array of numbers
function checkWin(numsArray) {   
    // Loop through array in sets of 3 
    for (let i = 0; i < numsArray.length - 2; i++) {
        // Check if the current element and the next 2 elements are equal to 1
        if (Number(numsArray[i]) == 1 && Number(numsArray[i + 1]) == 1 && Number(numsArray[i + 2]) == 1) {
            // If a winner is found, return true
            return true;
        }
    }
    // If no winner is found, return false
    return false;
}