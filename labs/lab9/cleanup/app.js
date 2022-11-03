/*  Zach Czachura
    11/03/2022
    Cleanup
*/

// Get input from the page
let inputWord = document.getElementById("word");
// Get the div to output results to
let res = document.getElementById("result");

// Onclick function for the button
function updateDiv() {
    // Get the word from the input div
    let word = inputWord.value;
    // Call the function to remove hashtags and pass the input word
    let clean = removeHash(word);
    // Output the results to the div
    res.innerHTML = clean;
}

// Function to remove all hashtags from a string
function removeHash(word) {
    // Create an empty string to store the cleaned word in
    let newWord = "";
    // Iterate through each letter of the input string
    for (let i = 0; i < word.length; i++) {
        // As long as the current character is not "#", add it to the new word
        if (word[i] != "#") {
            newWord += word[i];
        }
    }
    // Return the cleaned word without hashtags
    return newWord;
}