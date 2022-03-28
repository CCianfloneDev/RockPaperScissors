load();

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

    if (playerOne == playerTwo) 
    {
        switch (playerOne)
        {
            case "rock":
                userChoiceImage.setAttribute('src', 'images/Rock.png');
                computerChoiceImage.setAttribute('src', 'images/Rock.png');
            break;

            case "paper":
                userChoiceImage.setAttribute('src', 'images/Paper.png');
                computerChoiceImage.setAttribute('src', 'images/Paper.png');
            break;

            case "scissors":
                userChoiceImage.setAttribute('src', 'images/Scissors.png');
                computerChoiceImage.setAttribute('src', 'images/Scissors.png');
            break;
        }
        window.alert("The game is a tie!");
    }

    switch (playerOne) {
        case "rock":
            if (playerTwo == "paper")
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Paper.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Rock.png');

                window.alert("You won!");
                load();
            } 
            break;
        case "paper":
            if (playerTwo == "scissors") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Scissors.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Paper.png');

                window.alert("You won!");
                load();
            }
            break;
        case "scissors":
            if (playerTwo == "rock") 
            {
                let userChoiceImage = document.getElementById("userChoiceImage");
                userChoiceImage.setAttribute('src', 'images/Rock.png')

                let computerChoiceImage = document.getElementById("computerChoiceImage");
                computerChoiceImage.setAttribute('src', 'images/Scissors.png');

                window.alert("The computer won :(");
                load();
            }
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

    // When start button is clicked the initial image goes away.
    let startingImage = document.getElementById("initialImage");
    startingImage.setAttribute('src', '');

    // setting placeholder images for computer and user choice.
    let userImage = document.getElementById("userChoiceImage");
    userImage.setAttribute('src', 'images/placeHolder.png')

    let computerImage = document.getElementById("computerChoiceImage");
    computerImage.setAttribute('src', 'images/placeHolder.png');

    document.getElementById("start").style.display = "none";
}

function load(){
    document.getElementById("start").addEventListener("click", startGame);

    let startingImage = document.getElementById("initialImage");
    startingImage.setAttribute('src', 'images/GamePhoto.png');

    document.getElementById("start").style.display = "block";

    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "none";
    })

    let userChoiceImage = document.getElementById("userChoiceImage");
    userChoiceImage.setAttribute('src', '');

    let computerChoiceImage = document.getElementById("computerChoiceImage");
    computerChoiceImage.setAttribute('src', '');
}
