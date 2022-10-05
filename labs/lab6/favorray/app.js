/*  Zach Czachura
    10/6/2022
    Favorray
*/

// Create a string array with five of my favorite things
let favs = [
    "Raindrops on roses", 
    "Whiskers on kittens", 
    "Bright copper kettles", 
    "Warm woolen mittens", 
    "Brown paper packages ties up with strings"
];

// Get the div from the page
favsDiv = document.getElementById("favsDiv");

// Loop through the array and write the favorite things to the page with explanatory text
for (let i = 0; i < favs.length; i++) {
    favsDiv.innerHTML += favs[i] + ", is one of my favorite things.<br>";
}