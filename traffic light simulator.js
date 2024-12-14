
var color= prompt("Enter a traffic light color (Red, Yellow, Green):");

if (color) {
    color = color.toLowerCase(); // Normalize case
    if (color === "red") {
        console.log("Stop");
    } else if (color === "yellow") {
        console.log("Slow Down");
    } else if (color === "green") {
        console.log("Go");
    } else {
        console.log("Invalid Color");
    }
} else {
    console.log("No color entered. Please try again.");
}