// Global variables to track score.
let userScore = 0;
let computerScore = 0;

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

    let winMessage = document.getElementById("gameMessage-win");
    let tieMessage = document.getElementById("gameMessage-tie");
    let lostMessage = document.getElementById("gameMessage-lost");

    // If computer choice is same as user choice, determine what computer choice was.
    if (playerOne == playerTwo) 
    {
        computerChoiceImage.style.border = "2px solid green"; 
        userChoiceImage.style.border = "2px solid green";     
        tieMessage.style.display = "block";
        winMessage.style.display = "none";
        lostMessage.style.display = "none";

        switch (playerOne)
        {
            case "rock":
                userChoiceImage.src = "images/Rock.png";
                computerChoiceImage.src = "images/Rock.png";
            break;

            case "paper":
                userChoiceImage.src = "images/Paper.png";
                computerChoiceImage.src = "images/Paper.png";
            break;

            case "scissors":
                userChoiceImage.src = "images/Scissors.png";
                computerChoiceImage.src = "images/Scissors.png";
            break;
        }
    }
    // Computer chose rock.
    else if (playerOne == "rock")
    {
        computerChoiceImage.src = "images/Rock.png";

        if (playerTwo == "paper")
        {
            // User won: Rock Vs Paper
            userChoiceImage.src = "images/Paper.png";
            winMessage.style.display = "block";
            lostMessage.style.display = "none";
            tieMessage.style.display = "none";

            computerChoiceImage.style.border = "none";   
            userChoiceImage.style.border = "2px solid blue";
        
            userScore++;
        }
        else
        {
            // User lost: Rock Vs Scissors
            userChoiceImage.src = "images/Scissors.png";
            lostMessage.style.display = "block";
            winMessage.style.display = "none";
            tieMessage.style.display = "none";

            computerChoiceImage.style.border = "2px solid blue";
            userChoiceImage.style.border = "none";

            computerScore++;
        }
    }
    // Computer chose paper.
    else if (playerOne == "paper")
    {
        computerChoiceImage.src = "images/Paper.png";

        if (playerTwo == "scissors") 
        {
            // User won: Paper Vs Scissors
            userChoiceImage.src = "images/Scissors.png";
            winMessage.style.display = "block";
            lostMessage.style.display = "none";
            tieMessage.style.display = "none";

            userChoiceImage.style.border = "2px solid blue";  
            computerChoiceImage.style.border = "none";

            userScore++;
        } 
        else
        {
            // User lost: Paper Vs Rock
            userChoiceImage.src = "images/Rock.png";
            lostMessage.style.display = "block";
            winMessage.style.display = "none";
            tieMessage.style.display = "none";

            computerChoiceImage.style.border = "2px solid blue";
            userChoiceImage.style.border = "none";

            computerScore++;
        }
    }
    // Computer chose scissors.
    else if (playerOne == "scissors")
    {
        computerChoiceImage.src = "images/Scissors.png";

        if (playerTwo == "rock") 
        {
            // User won: Scissors Vs Rock
            userChoiceImage.src = "images/Rock.png";
            winMessage.style.display = "block";
            lostMessage.style.display = "none";
            tieMessage.style.display = "none";

            userChoiceImage.style.border = "2px solid blue"; 
            computerChoiceImage.style.border = "none";

            userScore++;
        }
        else
        {
            // User lost: Scissors Vs Paper
            userChoiceImage.src = "images/Paper.png";
            lostMessage.style.display = "block";
            winMessage.style.display = "none";
            tieMessage.style.display = "none";

            computerChoiceImage.style.border = "2px solid blue";
            userChoiceImage.style.border = "none";

            computerScore++;
        }
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

    // Hiding and resetting score
    document.getElementById("userScore").style.display = "none";
    document.getElementById("computerScore").style.display = "none";
    userScore = 0;
    computerScore = 0;

    // Clearing borders
    computerChoiceImage.style.border = "none"; 
    userChoiceImage.style.border = "none";     

    // Site buttons.
    document.getElementById("start").style.display = "block";
    Array.from(document.getElementsByClassName("gameButtons")).forEach((button) => {
        button.style.display = "none";
    })
}
