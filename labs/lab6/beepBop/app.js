/*  Zach Czachura
    10/6/2022
    Beep Bop
*/

// Get the div from the page
beepDiv = document.getElementById("beepDiv");

// Loop through 25 numbers (0 through 24)
for (let i = 0; i < 25; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        // Divisible by 3 gets beep
        if (i % 3 == 0) {
            beepDiv.innerHTML += "beep";
        }
        // Divisible by 5 gets bop
        if (i % 5 == 0) {
            beepDiv.innerHTML += "bop";
        }
        // Divisible by 3 and 5 gets both
        
        // New line to look nice
        beepDiv.innerHTML += "<br>";
    } else {
        // If it's not divisible by 3 or 5, just write the iterand
        beepDiv.innerHTML += i + "<br>";
    }
}