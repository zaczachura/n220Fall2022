/*  Zach Czachura
    11/10/2022
    Make Divs
*/

// Provided array of div styles
let objects = [
    { color: "#FF0000", height: 100, width: 300 },   
    { color: "#FFFF00", height: 200, width: 200 },   
    { color: "#ff0000", height: 300, width: 100 },   
];

// Loop through array of objects
for (let i = 0; i < objects.length; i++) {
    // Create a new div for each object
    let newDiv = document.createElement("div");

    // Change the styles of the div according to the array properties
    newDiv.style.background = objects[i].color;
    newDiv.style.height = objects[i].height + "px";
    newDiv.style.width = objects[i].width + "px";

    // Append the div to the document
    document.body.appendChild(newDiv);
}