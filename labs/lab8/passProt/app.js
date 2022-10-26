/*  Zach Czachura
    10/27/2022
    Password Protected
*/

// Get the two inputs from the page
let username = document.getElementById("user");
let password = document.getElementById("pass");
// Get the div to output text to
let res = document.getElementById("result");

// Onclick function for the button
function login() {
    // Check for exact values in both inputs
    if(username.value == "Username" && password.value == "Password") {
        // If correct, update div with success
        res.innerHTML = "Success";
    } else {
        // Otherwise, update div with wrong information
        res.innerHTML = "Wrong Information";
    }
}