function arithmeticQuiz() {
    // Generate two random numbers between 1 and 10
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    // Generate a random operator (+, -, *, /)
    let operators = ['+', '-', '*', '/'];
    let operator = operators[Math.floor(Math.random() * operators.length)];

    // Construct the question
    let question = `${num1} ${operator} ${num2}`;

    // Calculate the correct answer
    let correctAnswer;
    if (operator === '+') {
        correctAnswer = num1 + num2;
    } else if (operator === '-') {
        correctAnswer = num1 - num2;
    } else if (operator === '*') {
        correctAnswer = num1 * num2;
    } else if (operator === '/') {
        correctAnswer = (num1 / num2).toFixed(2); // Fix to two decimal places for division
    }

    // Ask the user for their answer
    let userAnswer = prompt(`What is the result of: ${question}`);

    // Compare user's answer with the correct answer
    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        console.log("Correct!");
    } else {
        console.log("Try Again!");
    }
}
