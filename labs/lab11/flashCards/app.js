/*  Zach Czachura
    11/17/2022
    Flash Cards
*/

// Get the elements from the page
let results = document.getElementById("results");
let buttons = document.getElementsByClassName("buttons");

// Add event listeners for clicks on each button
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", dispAnswer);
}

// Function to display the answer to a question button
function dispAnswer(event) {
    // Get the answer from the data attribute of the element
    let answer = event.target.dataset.answer;
    // Update the div with the answer
    results.innerHTML = answer;
}