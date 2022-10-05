/*  Zach Czachura
    10/6/2022
    Loop, but big
*/

// Get the div from the page
myDiv = document.getElementById("myDiv");

// Update the div with the numbers using a loop
for (let i = 1; i < 6; i++) {
    // i should be 1 through 5, then add three zeroes
    myDiv.innerHTML += i + "000<br>";
}