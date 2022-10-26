/*  Zach Czachura
    10/27/2022
    Tip Calculator
*/

// Get the input from the page
let txtAmount = document.getElementById("txtAmount");

// Onclick function for the button
function calcTip() {
    // Cast the value in the input to a number
    let amount = Number(txtAmount.value);
    // Calculate %20 tip
    let tip = .2 * amount;
    // Calculate the full bill
    let full = amount + tip;
    // Output the formatted tip and full bill to the developer console
    console.log("Tip: $" + tip + ". Total: $" + full);
}