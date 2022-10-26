/*  Zach Czachura
    10/27/2022
    Number Guesser
*/

// Get the input from the page
let guessInput = document.getElementById("numGuessed");
// Get the div to output results to
let res = document.getElementById("result");

// Generate a random number between 1 and 20
let num = Math.floor(1 + Math.random() * 20);

// Onclick function for the button
function guessNum() {
    // Cast the guessed input value as a number
    let guess = Number(guessInput.value);

    // Give feedback based on user's guess
    if(guess < num) {
        // If their guess is lower than the number, say too low
        res.innerHTML = "Too low!";
    } else if(guess > num) {
        // If their guess is higher than the number, say too high
        res.innerHTML = "Too high!";
    } else if(guess == num) {
        // If their guess is correct, let them know, then generate a new number and prompt them to continue guessing
        res.innerHTML = "You got it! The number was " + num + ". A new number between 1 and 20 has been generated, please continue guessing.";
        num = Math.floor(1 + Math.random() * 20);
    } else {
        // Generic message for if they guess something weird or other than a number between 1 and 20.
        res.innerHTML = "Something went wrong. Please guess a number between 1 and 20.";
    }

    // Remove the text in the input when the button is clicked
    guessInput.value = "";
}