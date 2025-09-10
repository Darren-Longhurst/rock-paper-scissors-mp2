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

    // Determine winner
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

    // Show result message and VS display
  function showResultMessage(playerChoice, computerChoice, winner) {
    $("#player-icon").html(getChoiceIcon(playerChoice));
    $("#computer-icon").html(getChoiceIcon(computerChoice));

    // Remove classes from previous game
    $("#result").removeClass("game-win game-lose game-draw");

 let message = "";
    if (winner === "player") {
      message = "You win this round!";
      $("#result").addClass("game-win");
    } else if (winner === "computer") {
      message = "Computer wins this round!";
      $("#result").addClass("game-lose");
    } else {
      message = "It's a tie!";
      $("#result").addClass("game-draw");
    }

    $("#result").html(`<h2>${message}</h2>`);
  }

  // Check if game is over
  function checkGameOver() {
    if (playerScore >= winScore || computerScore >= winScore) {
      let finalMessage = "";
      if (playerScore > computerScore) {
        finalMessage = "Great job, you've won the game!";
        $("#result").html(`<h2>${finalMessage}</h2>`);
        $("#result").removeClass("game-win game-draw game-lose").addClass("game-win");
      } else {
        finalMessage = "Damn it, computer won the game!";
        $("#result").html(`<h2>${finalMessage}</h2>`);
        $("#result").removeClass("game-win game-draw game-lose").addClass("game-lose");
      }

      $(".choice").css("pointer-events", "none");
    }
  }

  // Handle player choice click
  $(".choice").click(function () {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    if (winner === "player") {
      playerScore++;
    } else if (winner === "computer") {
      computerScore++;
    } else {
      tieScore++;
    }

    showResultMessage(playerChoice, computerChoice, winner);
    updateScoreboard();
    checkGameOver();
  });

  // Reset button click
  $("#reset-btn").click(function () {
    resetGame();
  });
