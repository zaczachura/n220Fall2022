/*  Zach Czachura
    11/03/2022
    Is Divisible By Seven
*/

// Get input from the page
let inputNum = document.getElementById("num");
// Get the div to output results to
let res = document.getElementById("result");

// Onclick function for the button
function checkDivisible() {
    // Cast input as a number before performing calculations
    let num = Number(inputNum.value);
    // Call function to determine whether input is divisible by seven
    let isDiv = divBySeven(num);
    // Output the results of the calculation to the div
    if (isDiv) {
        res.innerHTML = num + " is divisible by seven.";
    } else {
        res.innerHTML = num + " is not divisible by seven.";
    }
}

// Function to calculate divisibility by seven
function divBySeven(num) {
    // If the remainder of modulus 7 is zero, return true
    if (num % 7 == 0) {
        return true;
    // Otherwise return false
    } else {
        return false;
    }
}