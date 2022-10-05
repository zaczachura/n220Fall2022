/*  Zach Czachura
    10/6/2022
    Runner Up
*/

// Create an array of three "best times" (lowest to highest)
let times = [4.36, 7.28, 9.41];

// Get the divs from the page
place2 = document.getElementById("place2");
place3 = document.getElementById("place3");

// Display the second place time in the second place div
place2.innerHTML += times[1] + " seconds";

// Display the third place time in the third place div
place3.innerHTML += times[2] + " seconds";