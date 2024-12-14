function findLargerNumber() {
    // Ask the user for two numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    // Check if num1 is greater than num2
    if (num1 > num2) {
        console.log(`${num1} is the larger number.`);
    } else if (num2 > num1) {
        console.log(`${num2} is the larger number.`);
    } else {
        console.log("Both numbers are equal.");
    }
}
