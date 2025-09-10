 //Global variables
$(document).ready(function () {
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;
  const winScore = 5;

    // Map choice to Font Awesome icon
  function getChoiceIcon(choice) {
    if (choice === "rock") {
      return '<i class="fas fa-hand-rock"></i>';
    } else if (choice === "paper") {
      return '<i class="fas fa-hand-paper"></i>';
    } else {
      return '<i class="fas fa-hand-scissors"></i>';
    }
  }
})

  // Get computer choice
  function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    if (index === 0) {
      return "rock";
    } else if (index === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }