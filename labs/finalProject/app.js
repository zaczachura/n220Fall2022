/*  Zach Czachura
    12/10/2022
    Final Project - Concentration Game

    Icons used from icons8.com
*/

// Get the elements from the HTML page
let divCards = document.getElementsByClassName("card");
let playButton = document.getElementById("playButton");
let divAttempts = document.getElementById("attempts");
let divWin = document.getElementById("win");

// All cards will have the same back, so this can be a global variable
let cardBack = "url(img/questionmark.png)";

// Flag variables for keeping track of what the user has done in a game
let cardsPicked = 0;
let matches = 0;
let attempts = 0;
let lastPic = "";
let lastId = "";

// Start the game
startGame();

// Function for starting a new game
function startGame() {
    // Get a shuffled deck so each game is different
    let newDeck = shuffleCards();

    // Once you have a new deck, loop through the card elements and update them with 
    // the proper attributes, styles, and event listeners
    for (let i = 0; i < divCards.length; i++) {
        divCards[i].setAttribute("data-pic", newDeck[i].pic);
        divCards[i].setAttribute("data-id", newDeck[i].id);
        divCards[i].style.background = cardBack;
        divCards[i].addEventListener("click", pickCard);
        // When using the replay button, elements must be set back to visible
        divCards[i].style.visibility = "visible";
    }
}

// Function to shuffle the deck so each game is different
function shuffleCards() {
    // Starting array of card objects
    let cards = [
        {id: 0, pic: "bird.png"},
        {id: 1, pic: "bird.png"},
        {id: 2, pic: "cat.png"},
        {id: 3, pic: "cat.png"},
        {id: 4, pic: "dog.png"},
        {id: 5, pic: "dog.png"},
        {id: 6, pic: "fish.png"},
        {id: 7, pic: "fish.png"},
        {id: 8, pic: "horse.png"},
        {id: 9, pic: "horse.png"},
        {id: 10, pic: "pig.png"},
        {id: 11, pic: "pig.png"},
        {id: 12, pic: "sheep.png"},
        {id: 13, pic: "sheep.png"},
        {id: 14, pic: "turtle.png"},
        {id: 15, pic: "turtle.png"}
    ];
    
    // Empty array to move cards to
    let shuffled = [];

    // Starting at the length of the original array, pick a random element and move it to the 
    // empty array. Then, there will be one less element in the original array so decrement the
    // counter variable.
    for (let i = 16; i > 0; i--) {
        // Random card
        let randIndex = Math.floor(Math.random() * i);

        // Pull it out of the original deck
        let selected = cards.splice(randIndex, 1);

        // Put it in the new deck (splice returns an array, so just pass the single object in it)
        shuffled.push(selected[0]);
    }

    // Return the randomized deck
    return shuffled;
}

// Function that happens when a card is picked (clicked on)
function pickCard() {
    // Increment the flag tracking how many cards the user has selected
    cardsPicked++;

    // Don't let the user select the same card twice
    event.target.removeEventListener("click", pickCard);

    // Get the properties of the user's currently selected card
    let currentPic = event.target.dataset.pic;
    let currentId = event.target.dataset.id;

    // Reveal the card picked
    event.target.style.background = `url(img/${currentPic})`;

    // If they have now picked two cards, compare them
    if (cardsPicked == 2) {
        // While the comparison takes place, don't let the user pick any more cards
        for (let i = 0; i < divCards.length; i++) {
            divCards[i].removeEventListener("click", pickCard);
        }
        // Set a timeout so the user can review their selection while the game updates
        setTimeout(function() {
            // Call the actual function to compare their choices
            updateGame(currentPic, currentId)
        }, 2000); // 2000 milliseconds = 2 seconds   
    }
    
    // If they've only picked 1 card, store that pick to compare to their next pick
    if (cardsPicked == 1) {
        lastPic = currentPic;
        lastId = currentId;
    }    
}

// Function to update the game state based on a user's selections
function updateGame(currentPic, currentId) {
    // Every time the user picks a pair of cards counts as one attempt, so increment the variable for scoring
    attempts++;

    // If the user's picks match
    if (lastPic == currentPic) {
        // Loop through the card divs and set the matching selections to be hidden
        for (let i = 0; i < divCards.length; i++) {
            if (divCards[i].dataset.id == currentId || divCards[i].dataset.id == lastId) {
                divCards[i].style.visibility = "hidden";
            }
        }
        // Increment the number of matches to output to the user
        // Not really a score since it will always reach 8 matches, but they might be curious
        // how far they've gotten
        matches++;
    } else { // If the user's picks don't match
        // Loop through the card divs and flip them back face down
        for (let i = 0; i < divCards.length; i++) {
            divCards[i].style.background = cardBack;
        }        
    }

    // Re-enable selecting for all cards
    for (let i = 0; i < divCards.length; i++) {
        divCards[i].addEventListener("click", pickCard);
    }

    // Reset the flag variables for the next selections
    cardsPicked = 0;
    lastPic = "";
    lastId = "";

    // Update the output divs to show the user's current score
    divAttempts.innerText = `Attempts: ${attempts} Matches: ${matches}`;
    
    // Once they have matched all pairs, output a message and enable the replay button
    if (matches > 7) {
        divWin.innerHTML = `You win! It took you ${attempts} tries. Click the button to play again.`
        playButton.disabled = false;
    }
}

// Function to reset the game to play again
function replay() {
    // Reset all variables to the starting values
    cardsPicked = 0;
    matches = 0;
    attempts = 0;
    lastPic = "";
    lastId = "";

    // Reset the page elements to the starting values
    divWin.innerHTML = "";
    divAttempts.innerText = `Attempts: ${attempts} Matches: ${matches}`;

    // Disable the replay button
    playButton.disabled = true;

    // Start the new game
    startGame();
}