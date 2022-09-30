/*  Zach Czachura
    9/29/2022
    mcDiv'ns
*/

// Place a div on the page
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);

// Set the div's initial text
myDiv.innerHTML = "Donald's";

// When the div is clicked, append "Mc" to its innerHTML
myDiv.setAttribute("onclick", "addMc()");

function addMc() {
    myDiv.innerHTML = "Mc" + myDiv.innerHTML;
}