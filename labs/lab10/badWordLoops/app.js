/*  Zach Czachura
    11/10/2022
    Bad Word Catcher with Loops
*/

// Get the input from the page
let textIn = document.getElementById("text");
// Get the div to output results to
let resDiv = document.getElementById("result");

// Onclick function to search for bad words
function findBad() {
    // Get the value of the input
    let text = textIn.value;
    // Split the string into an array of words around space character
    let textArray = text.split(" ");
    // Initialize tally variable at 0
    let tally = 0;
    // Loop through each element of the array
    for (let i = 0; i < textArray.length; i++) {
        // Check whether each element is "clear", "water", or "tires"
        if (textArray[i].toLowerCase() == "clear" || textArray[i].toLowerCase() == "water" || textArray[i].toLowerCase() == "tires") {
            // If it is, increment the tally
            tally++;
        }
    }
    // If any bad words were found, output the tally to the user
    if (tally > 0) {
        resDiv.innerHTML = "Unfortunately, " + tally + " bad words were found.";
    // If no bad words were found, output a message to the user
    } else {
        resDiv.innerHTML = "No bad words were found.";
    }
    // Blank out the input
    textIn.value = "";
}