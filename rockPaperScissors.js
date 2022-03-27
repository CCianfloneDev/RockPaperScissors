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
            if (playerTwo == "paper")
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Paper.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Rock.png');

                return window.alert("The computer won :(");
            } 
            break;
        case "paper":
            if (playerTwo == "scissors") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Scissors.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Paper.png');

                return window.alert("The computer won :(");
            }
            break;
        case "scissors":
            if (playerTwo == "rock") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Rock.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Scissors.png');

                return window.alert("The computer won :(");
            }
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

    // When start button is clicked  the initial image goes away.
    let startingImage = document.getElementById("initialImage");
    startingImage.setAttribute('src', '');

    document.getElementById("start").style.display = "none";
}
