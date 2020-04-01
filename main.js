function init() {
  new Game(5);
}

class Game {
  constructor(rounds) {
    this.playerScore = 0;
    this.aiScore = 0;
    this.draws = 0;
    this.start(rounds);
  }

  start(rounds) {
    for (let i = 0; i < rounds; i++) {
      let playerMove = this.movePlayer();
      let aiMove = this.moveAI();
      console.log(`Round ${i + 1}`);
      console.log(`Player move: ${playerMove}`);
      console.log(`AI move:  ${aiMove}`);
      this.updateScore(playerMove, aiMove);
    }
    this.tally();
  }

  movePlayer() {
    let playerMove = prompt("It's your turn! Rock, paper, or scissors?");
    playerMove = playerMove.toLowerCase();
    if (
      playerMove != "rock" &&
      playerMove != "paper" &&
      playerMove != "scissors"
    ) {
      alert("Invalid input!");
      this.movePlayer();
    } else {
      return playerMove;
    }
  }

  moveAI() {
    let aiMove;
    let guess = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    switch (guess) {
      case 1:
        aiMove = "rock";
        break;
      case 2:
        aiMove = "paper";
        break;
      case 3:
        aiMove = "scissors";
        break;
      default:
        alert("Error!");
        return;
    }
    return aiMove;
  }

  updateScore(playerMove, aiMove) {
    console.log(playerMove + "" + aiMove);
    if (playerMove == aiMove) {
      this.draws++;
      return;
    }
    if (playerMove == "rock") {
      if (aiMove == "paper") {
        this.aiScore++;
      } else {
        this.playerScore++;
      }
      return; // scissors
    }

    if (playerMove == "paper") {
      if (aiMove == "rock") {
        this.playerScore++;
      } else {
        this.aiScore++;
      } // scissors
      return;
    }

    if (playerMove == "scissors") {
      if (aiMove == "rock") {
        this.aiScore++;
      } else {
        this.playerScore++;
      } // paper
      return;
    }
  }

  tally() {
    let message;
    if (this.playerScore > this.aiScore) {
      message = "You won! :)";
    } else if (this.playerScore < this.aiScore) {
      message = "You lost :(";
    } else {
      message = "It's a draw!";
    }
    alert(message);
    alert(
      `Your score: ${this.playerScore} AI's score: ${this.aiScore} Draws: ${this.draws}`
    );
  }
}

init();
