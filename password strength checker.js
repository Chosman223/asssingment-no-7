function checkPasswordStrength() {
    // Ask the user to input a password
    let password = prompt("Enter your password:");

    // Check the length of the password
    if (password.length >= 8) {
        console.log("Strong Password");
    } else if (password.length >= 5 && password.length <= 7) {
        console.log("Moderate Password");
    } else {
        console.log("Weak Password");
    }

    // Check if the password contains numbers or special characters
    let containsNumber = /[0-9]/.test(password);  // Checks if there's at least one digit
    let containsSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Checks for special characters

    // Give detailed feedback
    if (containsNumber && containsSpecialChar) {
        console.log("The password is enhanced with numbers and special characters.");
    } else if (containsNumber) {
        console.log("The password contains numbers.");
    } else if (containsSpecialChar) {
        console.log("The password contains special characters.");
    } else {
        console.log("The password lacks numbers or special characters.");
    }
}
