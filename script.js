const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
  return Math.random() < 0.33 ? rock : Math.random() < 0.66 ? paper : scissors;
}

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
}

//Specific lesson plan instructions wanted playRound to be within playGame.
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  //playRound tells the user who won the round
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === rock && computerChoice === paper) {
      console.log("You lose! Paper beats rock.");
      computerScore++;
    } else if (humanChoice === paper && computerChoice === scissors) {
      console.log("You lose! Scissors beats paper.");
      computerScore++;
    } else if (humanChoice === scissors && computerChoice === rock) {
      console.log("You lose! Rock beats scissors.");
      computerScore++;
    } else {
      console.log("You win!");
      humanScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  //Determines who wins the game
  if (humanScore > computerScore) {
    console.log("Congratulations! You've won.");
  } else if (humanScore < computerScore) {
    console.log("Sorry, the computer won.");
  } else {
    console.log("Try again. You tied.");
  }
}
playGame();
