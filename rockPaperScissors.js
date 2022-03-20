// global variables used in logic below.
var userChoice = "";
var computerChoice = "";

// Subscribing to startGame
document.getElementById("start").addEventListener("click",startGame);

// Subscribing all buttons to getWinner function. I do this to be able to compare which button was clicked.
document.getElementById("btnRock").addEventListener("click", () => {
  userChoice = 'rock';
  computerChoice = getComputerChoice();
  getWinner();
});
document.getElementById("btnPaper").addEventListener("click", () => {
  userChoice = 'paper';
  computerChoice = getComputerChoice();
  getWinner();
});
document.getElementById("btnScissors").addEventListener("click", () => {
  userChoice = 'scissors';
  computerChoice = getComputerChoice();
  getWinner();
});

/* Functions */
// Compares strings to get winner.
function getWinner()
{
  if (userChoice === computerChoice) {
    window.alert("The game is a tie!");
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      window.alert("The computer won :(");
    } else {
      window.alert("You won!");
    } 
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      window.alert("The computer won :(");
    } else {
      window.alert("You won!");
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      window.alert("The computer won!");
    } else {
      window.alert("You won!");
    }
  }
}

// Returns string to compare in getWinner function.
function getComputerChoice()
{
  let randomNumber = Math.floor(Math.random() * 3) + 1

  switch (randomNumber) 
  {
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
  }
}

// Hides start button and shows game buttons when clicked.
function startGame()
{
  var buttonsToShow = document.getElementsByClassName("gameButtons");

  for(i = 0; i < buttonsToShow.length; i++)
  {
      buttonsToShow[i].style.display = "block";
  }

  document.getElementById("start").style.display = "none";
}
