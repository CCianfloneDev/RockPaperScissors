// Initial load.
load();

// Event listeners for game buttons.
["btnPaper", "btnRock", "btnScissors"].forEach((button) => {
    document.getElementById(button).addEventListener("click", () => {
        let userChoice = button.substring("btn".length).toLowerCase();
        let computerChoice = getComputerChoice();
        getWinner(computerChoice, userChoice);

        // Updating score.
        document.getElementById("userScore").innerHTML = `User Score: ${userScore}`;
        document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
    });
});

// Global variables to track score.
let userScore = 0;
let computerScore = 0;

/* Get winner function
 * Param: playerOne, playerTwo
 * Returns winner.
 */
function getWinner(playerOne, playerTwo) {
    // setting placeholder images for computer and user choice.
    let userChoiceImage = document.getElementById("userChoiceImage");
    userChoiceImage.setAttribute('src', 'images/placeHolder.png')

    let computerChoiceImage = document.getElementById("computerChoiceImage");
    computerChoiceImage.setAttribute('src', 'images/placeHolder.png');

    // If computer choice is same as user choice, determine what computer choice was.
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
        if (confirm('Would you like to play again?')) {
            return;
        }
        else {
            load();
        }
    }



    // Checks what option was returned from GetComputerChoice()
    switch (playerOne) {

        // Computer chose rock.
        case "rock":
            document.getElementById("computerChoiceImage").src = "images/Rock.png";

            if (playerTwo == "paper")
            {
                document.getElementById("userChoiceImage").src = "images/Paper.png";
                userScore++;

                window.alert("You won!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            }
            else
            {
                document.getElementById("userChoiceImage").src = "images/Scissors.png";
                computerScore++;

                window.alert("You lost!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            }

            break;

        // Computer chose paper.
        case "paper":
            document.getElementById("computerChoiceImage").src = "images/Paper.png";

            if (playerTwo == "scissors") 
            {
                document.getElementById("userChoiceImage").src = "images/Scissors.png";
                userScore++;

                window.alert("You won!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            } 
            else
            {
                document.getElementById("userChoiceImage").src = "images/Rock.png";
                computerScore++;

                window.alert("You lost!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            }

            break;

        // Computer chose scissors.
        case "scissors":
            document.getElementById("computerChoiceImage").src = "images/Scissors.png";

            if (playerTwo == "rock") 
            {
                document.getElementById("userChoiceImage").src = "images/Rock.png";
                userScore++;

                window.alert("You won!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            }
            else
            {
                document.getElementById("userChoiceImage").src = "images/Paper.png";
                computerScore++;

                window.alert("You lost!");
                if (confirm('Would you like to play again?')) {
                    return;
                }
                else {
                    load();
                }
            }

            break;              
    }
}

/* Get computer choice function.
 *
 * Returns one of three possible choices for computer player.
 */
function getComputerChoice() {
    return ["rock", "paper", "scissors"] [Math.floor(Math.random() * 3)]
}

/* Start game function.
 * 
 * Occurs on start-button click.
 */
function startGame() {
    // hide start button
    document.getElementById("start").style.display = "none";

    // display game buttons
    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "block";
    })

    // When start button is clicked the initial image goes away.
    document.getElementById("initialImage").src = "";

    // setting placeholder images for computer and user choice.
    document.getElementById("userChoiceImage").src = "images/placeHolder.png";
    document.getElementById("computerChoiceImage").src = "images/placeHolder.png";

    // Showing score
    document.getElementById("userScore").style.display = "block";
    document.getElementById("computerScore").style.display = "block";

    document.getElementById("userScore").innerHTML = `User Score: ${userScore}`;
    document.getElementById("computerScore").innerHTML = `Computer Score: ${computerScore}`;
}

/* Load function of site.
 *
 * Sets inital state of site elements.
 */
function load(){
    document.getElementById("start").addEventListener("click", startGame);

    // Site images.
    document.getElementById("initialImage").src = "images/GamePhoto.png";
    document.getElementById("userChoiceImage").src = "";
    document.getElementById("computerChoiceImage").src = "";

    // Site buttons.
    document.getElementById("start").style.display = "block";
    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "none";
    })
}
