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
