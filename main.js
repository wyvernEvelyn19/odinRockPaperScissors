let getComputerChoice = () => {
  choice = Math.floor(Math.random() * 3) + 1;
  let ans;
  if (choice == 1) {
    ans = "rock";
  } else if (choice == 2) {
    ans = "paper";
  } else {
    ans = "scissors";
  }

  return ans;
};

// let getHumanChoice = () => {
//   choice = prompt(
//     "Enter the number corresponding to your choice: 1 -> rock , 2 -> paper, 3 -> scissors"
//   );
//   let ans;

//   if (choice == 1) {
//     ans = "rock";
//   } else if (choice == 2) {
//     ans = "paper";
//   } else if (choice == 3) {
//     ans = "scissors";
//   }
//   return ans;
// };

// let playRound = (comp, hum) => {
//   if (hum == "rock") {
//     if (comp == "rock") {
//       console.log("It is a tie!!");
//       return 0;
//     } else if (comp == "paper") {
//       console.log("Computer Wins! It chose paper.");
//       return -1;
//     } else {
//       console.log("You Win!!");
//       return 1;
//     }
//   } else if (hum == "paper") {
//     if (comp == "rock") {
//       console.log("You Win!!");
//       return 1;
//     } else if (comp == "paper") {
//       console.log("It is a tie!!");
//       return 0;
//     } else {
//       console.log("Computer Wins! It chose scissors.");
//       return -1;
//     }
//   } else {
//     if (comp == "rock") {
//       console.log("Computer Wins! It chose rock");
//       return -1;
//     } else if (comp == "paper") {
//       console.log("You Win!!");
//       return 1;
//     } else {
//       console.log("It is a tie!!");
//       return 0;
//     }
//   }
// };

// let playGame = () => {
//   let humanScore = 0;
//   let compScore = 0;

//   while (humanScore !== 5 && compScore !== 5) {
//     computer = getComputerChoice();
//     human = getHumanChoice();
//     round = playRound(computer, human);

//     if (round === 1) {
//       humanScore++;
//     } else if (round === -1) {
//       compScore++;
//     } else {
//       continue;
//     }

//     console.log("Score: " + compScore + " - " + humanScore);
//   }

//   if (humanScore === 5) {
//     console.log("Winner!!");
//   } else {
//     console.log("Loser!");
//   }
// };

// Rock Choice
function rockChoice() {
  let comp = getComputerChoice();
  if (comp == "rock") {
    console.log("It is a tie!!");
    postUpdate("black", "It is a tie!!");
    return 0;
  } else if (comp == "paper") {
    console.log("Computer Wins! It chose paper.");
    postUpdate("red", "Computer Wins! It chose paper.");
    return -1;
  } else {
    console.log("You Win!!");
    postUpdate("green", "You Win!!");
    return 1;
  }
}

// Paper Choice
function paperChoice() {
  let computer = getComputerChoice();

  if (computer == "rock") {
    postUpdate("green", "You Win!!");
    return 1;
  } else if (computer == "paper") {
    postUpdate("black", "It is a tie!!");
    return 0;
  } else {
    postUpdate("red", "Computer Wins! It chose scissors.");
    return -1;
  }
}

// Scissors Choice
function scissorsChoice() {
  let computer = getComputerChoice();

  if (computer == "rock") {
    postUpdate("red", "Computer Wins! It chose rock.");
    return -1;
  } else if (computer == "paper") {
    postUpdate("green", "You Win!!");
    return 1;
  } else {
    postUpdate("black", "It is a tie!!");
    return 0;
  }
}

// Update Score

function updateScore(playerScore, computerScore) {
  const player = document.querySelector(".player-score");
  const computer = document.querySelector(".computer-score");
  console.log(computer);
  player.textContent = `${playerScore}`;
  computer.textContent = `${computerScore}`;
}

// Post Score Update
function postUpdate(color, text) {
  const updates = document.querySelector(".updates");
  updates.setAttribute("style", `padding: 10px;`);
  updates.innerHTML = `
  <div style="color: ${color}">${text}</div>
  `;
}

// DOM
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;
let computer = getComputerChoice();
let win;

// Rock Decision

rock.addEventListener("click", () => {
  win = rockChoice();

  if (win == 1) {
    playerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  } else if (win == 0) {
    console.log("Score: " + playerScore + " - " + computerScore);
  } else {
    computerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  }

  updateScore(playerScore, computerScore);

  if (playerScore === 5) {
    console.log("You win the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  } else if (computerScore === 5) {
    console.log("You lose the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  }
});

// Paper Decision
paper.addEventListener("click", () => {
  win = paperChoice();

  if (win == 1) {
    playerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  } else if (win == 0) {
    console.log("Score: " + playerScore + " - " + computerScore);
  } else {
    computerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  }

  updateScore(playerScore, computerScore);

  if (playerScore === 5) {
    console.log("You win the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  } else if (computerScore === 5) {
    console.log("You lose the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  }
});

// Scissors Decision
scissors.addEventListener("click", () => {
  win = scissorsChoice();

  if (win == 1) {
    playerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  } else if (win == 0) {
    console.log("Score: " + playerScore + " - " + computerScore);
  } else {
    computerScore++;
    console.log("Score: " + playerScore + " - " + computerScore);
  }

  updateScore(playerScore, computerScore);

  if (playerScore === 5) {
    console.log("You win the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  } else if (computerScore === 5) {
    console.log("You lose the game.");
    playerScore = 0;
    computerScore = 0;
    console.log("New Game has started");
  }
});

// playGame();
