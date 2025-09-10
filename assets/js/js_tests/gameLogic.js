// Game Logic Functions

function getChoiceIcon(choice) {
  if (choice === "rock") {
    return '<i class="fas fa-hand-rock"></i>';
  } else if (choice === "paper") {
    return '<i class="fas fa-hand-paper"></i>';
  } else {
    return '<i class="fas fa-hand-scissors"></i>';
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getWinner(player, computer) {
  if (player === computer) {
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

module.exports = { getChoiceIcon, getComputerChoice, getWinner };
