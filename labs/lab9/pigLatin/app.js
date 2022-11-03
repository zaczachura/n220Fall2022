/*  Zach Czachura
    11/03/2022
    Pig Latin
*/

// Get input from the page
let inputWord = document.getElementById("word");
// Get the div to output results to
let res = document.getElementById("result");

// Onclick function for the button
function updateDiv() {
    // Get the word from the input div
    let word = inputWord.value;
    // Call the function to find the first vowel and pass the input word
    let vowelLoc = findFirstVowel(word);
    // Reassemble the word into pig latin based on the location of the first vowel
    let result = word.slice(vowelLoc) + word.slice(0, vowelLoc) + "ay";
    // Output the result to the div
    res.innerHTML = result;
}

// Function to find the location of the first vowel in a string
function findFirstVowel(word) {
    // Create a variable to store the index of the first vowel
    let index = 0;
    // Iterate through every letter in the string
    for (let i = 0; i < word.length; i++) {
        // Convert the letter to uppercase for comparison
        let letter = word[i].toLocaleUpperCase();
        // Compare the uppercased letter to each vowel
        if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U") {
            // If a vowel is found, return the index of the first vowel to escape the loop
            index = i;
            return index;
        }
    }
    // If no vowels are found, return 0
    return index;
}