const option1 = "rock";
const option2 = "paper";
const option3 = "scissors";

function getComputerChoice() {
  return Math.random() < 0.33
    ? option1
    : Math.random() < 0.66
      ? option2
      : option3;
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

function getHumanChoice() {
  return prompt("Enter your choice (rock, paper, or scissors):");
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (humanChoice === option1 && computerChoice === option2) {
    console.log("You lose! Paper beats rock.");
    computerScore++;
  } else if (humanChoice === option2 && computerChoice === option3) {
    console.log("You lose! Scissors beats paper.");
    computerScore++;
  } else if (humanChoice === option3 && computerChoice === option1) {
    console.log("You lose! Rock beats scissors.");
    computerScore++;
  } else {
    console.log("You win!");
    humanScore++;
  }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice;

playRound(humanSelection, computerSelection);
