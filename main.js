let round = 0;
let playerScore = 0;
let computerScore = 0;
let draws = 0;

const ROUND_NUMBER = document.querySelector("#round-number");
const PLAYER_SCORE = document.querySelector("#player-score");
const COMPUTER_SCORE = document.querySelector("#computer-score");
const DRAW_COUNT = document.querySelector("#draws");

function move(id) {
  switch (id) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function check(playerMove, computerMove) {
  round++;
  if (playerMove == computerMove) {
    draws++;
    return;
  }
  if (playerMove == "rock") {
    if (computerMove == "paper") {
      computerScore++;
    } else {
      playerScore++;
    }
    return; // scissors
  }

  if (playerMove == "paper") {
    if (computerMove == "rock") {
      playerScore++;
    } else {
      computerScore++;
    } // scissors
    return;
  }

  if (playerMove == "scissors") {
    if (computerMove == "rock") {
      computerScore++;
    } else {
      playerScore++;
    } // paper
    return;
  }
}

function update() {
  ROUND_NUMBER.textContent = round;
  PLAYER_SCORE.textContent = playerScore;
  COMPUTER_SCORE.textContent = computerScore;
  DRAW_COUNT.textContent = draws;
  if (round == 5) {
    showEndScreen();
  }
}

const BUTTONS = document.querySelectorAll(".button");
let playerMove;

// add
BUTTONS.forEach((button) => {
  button.addEventListener("click", (e) => {
    // player move
    let buttonId = parseInt(e.target.getAttribute("data-id"));
    playerMove = move(buttonId);

    // computer move
    // generates a random number from 1 to 3
    let guess = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    computerMove = move(guess);

    // method to check who won
    check(playerMove, computerMove);
    update();
  });
});

function init() {
  ROUND_NUMBER.textContent = round;
  PLAYER_SCORE.textContent = playerScore;
  COMPUTER_SCORE.textContent = computerScore;
  DRAW_COUNT.textContent = draws;
}

document.addEventListener("load", init());

// Modal

const MODAL = document.querySelector("#modal");
const END_MESSAGE = document.querySelector("#end-message");
const PLAY_AGAIN = document.querySelector("#play-again-button");
const CONTINUE = document.querySelector("#continue-button");

function reset() {
  round = 0;
  playerScore = 0;
  computerScore = 0;
  draws = 0;
  update();
}

function showEndScreen() {
  let endMessage;
  if (playerScore > computerScore) {
    endMessage = "Congratulations! You win!";
  } else if (playerScore < computerScore) {
    endMessage = "You lose.";
  } else {
    endMessage = "It's a draw!";
  }
  END_MESSAGE.textContent = endMessage;
  MODAL.style.display = "flex";
}

PLAY_AGAIN.addEventListener("click", () => {
  MODAL.style.display = "none";
});

CONTINUE.addEventListener("click", () => {
  MODAL.style.display = "none";
});
