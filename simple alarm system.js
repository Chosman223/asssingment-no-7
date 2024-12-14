function simpleAlarmSystem() {
    // Get inputs for door status and motion detection
    let doorOpen = prompt("Is the door open? (yes or no):").toLowerCase();
    let motionDetected = prompt("Is motion detected? (yes or no):").toLowerCase();

    // Validate inputs
    const validInputs = ["yes", "no"];
    if (!validInputs.includes(doorOpen) || !validInputs.includes(motionDetected)) {
        console.log("Invalid input. Please answer with 'yes' or 'no' only.");
        return;
    }

    // Check conditions
    if (doorOpen === "yes" || motionDetected === "yes") {
        console.log("Alarm Triggered");
    } else if (doorOpen === "no" && motionDetected === "no") {
        console.log("All Safe");
    } else {
        console.log("Unexpected condition.");
    }
}
