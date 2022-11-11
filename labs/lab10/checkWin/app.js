/*  Zach Czachura
    11/10/2022
    Check Win
*/

// Get the input from the page
let numsIn = document.getElementById("nums");
// Get the div to output results to
let resDiv = document.getElementById("result");

// Onclick function to check for three 1's in a row
function checkWin() {
    // Get the value of the input
    let nums = numsIn.value;
    // Split the string into an array of numbers around commas
    let numsArray = nums.split(",");
    // Loop through the array in sets of 3
    for (let i = 0; i < numsArray.length - 2; i++) {
        // Check if the current element and the next 2 elements are equal to 1
        if (Number(numsArray[i]) == 1 && Number(numsArray[i + 1]) == 1 && Number(numsArray[i + 2]) == 1) {
            // If three 1's are found in a row, output "winner" and exit the loop
            resDiv.innerHTML = "winner";
            break;
        } else {
            // If three 1's are not found in a row, output "not winner"
            resDiv.innerHTML = "not winner";
        }
    }
}