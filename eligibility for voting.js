function checkVotingEligibility() {
    // Ask the user for their age
    let age = prompt("Please enter your age:");

    // Convert input to an integer
    age = parseInt(age);

    // Check eligibility
    if (age >= 18) {
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
}
