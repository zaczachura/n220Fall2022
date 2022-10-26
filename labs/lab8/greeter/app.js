/*  Zach Czachura
    10/27/2022
    Greeter
*/

// Get the input from the page
let txtName = document.getElementById("txtName");

// Onclick function for the button
function greet() {
    // Output a greeting to the developer console with the name in the input
    console.log("Hello " + txtName.value);
}