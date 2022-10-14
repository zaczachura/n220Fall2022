/*  Zach Czachura
    10/13/2022
    Rock Paper Scissors (Guard)
*/

// Create an array for the computer to choose from
let choices = ["Rock", "Paper", "Scissors"];

// Initialize score at 0
let score = 0;

// Get the divs for the output
let resDiv = document.getElementById("results");
let scoreDiv = document.getElementById("score");

// Generate a random choice for the computer
function compChoice() {
    // Pick a number between 0 and 2
    let choice = Math.floor(Math.random() * 3);
    // Get that choice from the choices array and return it
    return choices[choice];
}

// Function for picking "Rock"
function clickRock() {
    // Get computer's choice
    let comp = compChoice();
    // Lose to paper
    if (comp == "Paper") {
        score -= 1;
    }
    // Win against scissors
    if (comp == "Scissors") {
        score += 1;
    }

    // Update the results and score
    resDiv.innerHTML = "You chose Rock, computer chose " + comp;
    scoreDiv.innerHTML = score;
}

function clickPaper() {
    // Get computer's choice
    let comp = compChoice();
    // Win against rock
    if (comp == "Rock") {
        score += 1;
    }
    // Lose to scissors
    if (comp == "Scissors") {
        score -= 1;
    }

    // Update the results and score
    resDiv.innerHTML = "You chose Paper, computer chose " + comp;
    scoreDiv.innerHTML = score;
}

function clickScissors() {
    // Get computer's choice
    let comp = compChoice();
    // Lose to rock
    if (comp == "Rock") {
        score -= 1;
    }
    // Win against paper
    if (comp == "Paper") {
        score += 1;
    }

    // Update the results and score
    resDiv.innerHTML = "You chose Scissors, computer chose " + comp;
    scoreDiv.innerHTML = score;
}

function clickGuard() {
    // Get computer's choice
    let comp = compChoice();

    // Lose half point for guarding
    score -= 0.5;

    // Update the results and score
    resDiv.innerHTML = "You chose Guard, computer chose " + comp;
    scoreDiv.innerHTML = score;
}