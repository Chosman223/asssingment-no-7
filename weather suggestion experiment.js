function weatherSuggestion() {
    // Ask the user for weather condition input
    let weather = prompt("Enter the weather condition (Sunny, Rainy, Cold):");

    // Make the input case-insensitive
    weather = weather.toLowerCase();

    // Provide outfit suggestions based on the weather
    if (weather === "sunny") {
        console.log("Wear sunglasses");
    } else if (weather === "rainy") {
        console.log("Take an umbrella");
    } else if (weather === "cold") {
        console.log("Wear a jacket");
    } else {
        console.log("Invalid weather input. Please enter Sunny, Rainy, or Cold.");
    }
}
