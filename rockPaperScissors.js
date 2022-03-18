function startGame()
{
  var buttonsToShow = document.getElementsByClassName("gameButtons");

  for(i = 0; i < buttonsToShow.length ; i++)
  {
      buttonsToShow[i].style.display = "block";
  }

  document.getElementById("start").style.display = "none";
}

// Subscribing to event
document.getElementById("start").addEventListener("click",startGame)



function getUserChoice(userInput) 
{
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' ) {
    return userInput;
  } else {
    console.log('Error!');
  }
};

function getComputerChoice()
{
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors'
  }
}

function determineWinner(userChoice,computerChoice)
{
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'The user won!';
    } else {
    return 'You won!';
    } 
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

function playGame()
{
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
