function temperatureConversion() {
    // Ask the user for the conversion type
    let conversionType = prompt("Choose conversion type:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");

    // Convert the input to a number
    conversionType = parseInt(conversionType);

    if (conversionType === 1) {
        // Celsius to Fahrenheit
        let celsius = prompt("Enter temperature in Celsius:");
        celsius = parseFloat(celsius); // Convert input to a number

        // Check if the input is a valid number
        if (isNaN(celsius)) {
            console.log("Invalid input. Please enter a valid numeric value for Celsius.");
        } else {
            // Apply the formula: F = (C × 9/5) + 32
            let fahrenheit = (celsius * 9/5) + 32;
            console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
        }
    } else if (conversionType === 2) {
        // Fahrenheit to Celsius
        let fahrenheit = prompt("Enter temperature in Fahrenheit:");
        fahrenheit = parseFloat(fahrenheit); // Convert input to a number

        // Check if the input is a valid number
        if (isNaN(fahrenheit)) {
            console.log("Invalid input. Please enter a valid numeric value for Fahrenheit.");
        } else {
            // Apply the formula: C = (F - 32) × 5/9
            let celsius = (fahrenheit - 32) * 5/9;
            console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
        }
    } else {
        console.log("Invalid choice. Please select either 1 or 2.");
    }
}
