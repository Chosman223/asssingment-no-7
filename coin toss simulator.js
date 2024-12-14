function coinTossSimulator() {
    // Ask the user to input 1 for "Heads" or 0 for "Tails"
    let userInput = prompt("Enter 1 for Heads or 0 for Tails:");

    // Validate input
    if (userInput !== "0" && userInput !== "1") {
        console.log("Invalid input. Please enter 1 for Heads or 0 for Tails.");
        return;
    }

    // Simulate a coin toss using random integer generation
    let coinToss = Math.floor(Math.random() * 2);  // Generates either 0 or 1

    // Compare the user's input with the simulated coin toss result
    if (parseInt(userInput) === coinToss) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}
