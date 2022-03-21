document.getElementById("start").addEventListener("click", startGame);

["btnPaper", "btnRock", "btnScissors"].forEach((button) => {
    document.getElementById(button).addEventListener("click", () => {
        let userChoice = button.substring("btn".length).toLowerCase();
        let computerChoice = getComputerChoice();
        getWinner(computerChoice, userChoice);
    });
});

function getWinner(playerOne, playerTwo) {
    if (playerOne == playerTwo) return window.alert("The game is a tie!");
    switch (playerOne) {
        case "rock":
            if (playerTwo == "paper") return window.alert("The computer won :(");
            break;
        case "paper":
            if (playerTwo == "scissors") return window.alert("The computer won :(");
            break;
        case "scissors":
            if (playerTwo == "rock") return window.alert("The computer won :(");
            break;
        default:
            window.alert("You won!");
            break;
    }
}

function getComputerChoice() {
    return ["rock", "paper", "scissors"] [Math.floor(Math.random() * 3)]
}

function startGame() {
    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "block";
    })
    document.getElementById("start").style.display = "none";
}
