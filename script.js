const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const gameWinner = document.getElementById("gameWinner");

let humanScore = 0;
let computerScore = 0;

//Event listeners
document.getElementById("rock").addEventListener("click", function () {
  playGame(rock, getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function () {
  playGame(paper, getComputerChoice());
});

document.getElementById("scissors").addEventListener("click", function () {
  playGame(scissors, getComputerChoice());
});

//Generates random choice for computer
function getComputerChoice() {
  return Math.random() < 0.33 ? rock : Math.random() < 0.66 ? paper : scissors;
}

function disableButtons() {
  const buttons = document.getElementsByClassName("choice");
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons.item(i);

    button.disabled = true;
  }
}

//Tells player who won the round for up to 5 rounds and then displays who won the game
function playGame(humanChoice, computerChoice) {
  const winnerElement = document.getElementById("roundWinner");
  const userCount = document.getElementById("userCount");
  const computerCount = document.getElementById("computerCount");

  if (humanChoice === computerChoice) {
    winnerElement.textContent = "It's a tie!";
  } else if (
    (humanChoice === rock && computerChoice === scissors) ||
    (humanChoice === paper && computerChoice === rock) ||
    (humanChoice === scissors && computerChoice === paper)
  ) {
    winnerElement.textContent = "You win!";
    humanScore++;
    userCount.innerText = `User: ${humanScore}`;
  } else {
    winnerElement.textContent = "Computer wins!";
    computerScore++;
    computerCount.innerText = `Computer: ${computerScore}`;
  }

  if (humanScore === 5) {
    gameWinner.innerText = `Winner: You win the game!`;
    disableButtons();
  } else if (computerScore === 5) {
    gameWinner.innerText = `Winner: Computer wins the game :(`;
    disableButtons();
  }
}
