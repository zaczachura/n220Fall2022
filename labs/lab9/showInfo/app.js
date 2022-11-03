/*  Zach Czachura
    11/03/2022
    Show Info
*/

// Array of strings for display
let strings = [
    "My name is Zach Czachura",
    "I go to Indiana University - Purdue University Indianapolis",
    "This is for NEWM-N 220 Introduction to Media Application Development"
];

// Get the div to output results to
let myOutput = document.getElementById("output");

// Function to display an element of the strings array in the output div
function showInfo(i) {
    myOutput.innerHTML = strings[i];
}