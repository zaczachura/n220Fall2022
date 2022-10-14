/*  Zach Czachura
    10/13/2022
    UI Navigation Highlighter
*/

// Get the div to for the selection at the top of the screen
let sel = document.getElementById("selection");

// Get each of the selectable divs
let menu = document.getElementById("menu");
let map = document.getElementById("map");
let radio = document.getElementById("radio");
let phone = document.getElementById("phone");
let asst = document.getElementById("asst");
let set = document.getElementById("set");

// Put the selectable divs into an array
let divs = [menu, map, radio, phone, asst, set];

// Onclick function for "Menu" selection
function clickMenu() {
    // Change top div to the text of the selection
    sel.innerHTML = menu.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "menu") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}

// Onclick function for "Map" selection
function clickMap() {
    // Change top div to the text of the selection
    sel.innerHTML = map.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "map") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}

// Onclick function for "Radio" selection
function clickRadio() {
    // Change top div to the text of the selection
    sel.innerHTML = radio.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "radio") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}

// Onclick function for "Phone" selection
function clickPhone() {
    // Change top div to the text of the selection
    sel.innerHTML = phone.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "phone") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}

// Onclick function for "Assistant" selection
function clickAsst() {
    // Change top div to the text of the selection
    sel.innerHTML = asst.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "asst") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}

// Onclick function for "Settings" selection
function clickSet() {
    // Change top div to the text of the selection
    sel.innerHTML = set.innerHTML;

    // Loop through the divs array
    for (let i = 0; i < divs.length; i++) {
        // Change the background and font-weight of the selection
        if (divs[i].id == "set") {
            divs[i].style.background = "rgb(119, 252, 3)";
            divs[i].style.fontWeight = "bold";
        } else { // Change the others back to normal
            divs[i].style.background = "none";
            divs[i].style.fontWeight = "normal";
        }
    }
}