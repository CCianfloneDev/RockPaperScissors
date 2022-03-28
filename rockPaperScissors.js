document.getElementById("start").addEventListener("click", startGame);

["btnPaper", "btnRock", "btnScissors"].forEach((button) => {
    document.getElementById(button).addEventListener("click", () => {
        let userChoice = button.substring("btn".length).toLowerCase();
        let computerChoice = getComputerChoice();
        getWinner(computerChoice, userChoice);
    });
});

function getWinner(playerOne, playerTwo) {
    // setting placeholder images for computer and user choice.
    let userChoiceImage = document.getElementById("userChoiceImage");
    userChoiceImage.setAttribute('src', 'images/placeHolder.png')

    let computerChoiceImage = document.getElementById("computerChoiceImage");
    computerChoiceImage.setAttribute('src', 'images/placeHolder.png');

    switch (playerOne) {
        case "rock":
            if (playerTwo == "paper")
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Paper.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Rock.png');

                window.alert("You won!");
            } 
            return;
        case "paper":
            if (playerTwo == "scissors") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Scissors.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Paper.png');

                window.alert("You won!");
            }
            return;
        case "scissors":
            if (playerTwo == "rock") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Rock.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Scissors.png');

                window.alert("The computer won :(");
            }
            return;
    }
}

function getComputerChoice() {
    return ["rock", "paper", "scissors"] [Math.floor(Math.random() * 3)]
}

function startGame() {
    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "block";
    })

    // When start button is clicked the initial image goes away.
    let startingImage = document.getElementById("initialImage");
    startingImage.setAttribute('src', '');

    // setting placeholder images for computer and user choice.
    let userChoiceImage = document.getElementById("userChoiceImage");
    userChoiceImage.setAttribute('src', 'images/placeHolder.png')

    let computerChoiceImage = document.getElementById("computerChoiceImage");
    computerChoiceImage.setAttribute('src', 'images/placeHolder.png');

    document.getElementById("start").style.display = "none";
}
