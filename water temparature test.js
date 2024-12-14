 {
    
    let temperature = prompt("Enter the water temperature in Celsius:");

    temperature = parseFloat(temperature);

    if (isNaN(temperature)) {
        console.log("Invalid input. Please enter a valid number.");
    } else if (temperature <= 0) {
        console.log("Freezing");
    } else if (temperature > 0 && temperature <= 15) {
        console.log("Cold");
    } else if (temperature > 15 && temperature <= 30) {
        console.log("Warm");
    } else if (temperature > 30) {
        console.log("Hot");
    } else {
        console.log("Unknown condition");
    }
}
