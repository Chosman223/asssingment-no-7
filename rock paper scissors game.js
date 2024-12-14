function rockPaperScissorsGame() {

    let player1 = prompt("Player 1: Enter rock, paper, or scissors:").toLowerCase();
    let player2 = prompt("Player 2: Enter rock, paper, or scissors:").toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];
    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
        console.log("Invalid input. Both players must choose rock, paper, or scissors.");
        return;
    }


    if (player1 === player2) {
        console.log("It's a Tie!");
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "paper" && player2 === "rock") ||
        (player1 === "scissors" && player2 === "paper")
    ) {
        console.log("Player 1 Wins!");
    } else {
        console.log("Player 2 Wins!");
    }
}
