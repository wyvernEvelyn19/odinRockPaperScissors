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

let getHumanChoice = () => {
  choice = prompt(
    "Enter the number corresponding to your choice: 1 -> rock , 2 -> paper, 3 -> scissors"
  );
  let ans;

  if (choice == 1) {
    ans = "rock";
  } else if (choice == 2) {
    ans = "paper";
  } else if (choice == 3) {
    ans = "scissors";
  }
  return ans;
};

let playRound = (comp, hum) => {
  if (hum == "rock") {
    if (comp == "rock") {
      console.log("It is a tie!!");
      return 0;
    } else if (comp == "paper") {
      console.log("Computer Wins! It chose paper.");
      return -1;
    } else {
      console.log("You Win!!");
      return 1;
    }
  } else if (hum == "paper") {
    if (comp == "rock") {
      console.log("You Win!!");
      return 1;
    } else if (comp == "paper") {
      console.log("It is a tie!!");
      return 0;
    } else {
      console.log("Computer Wins! It chose scissors.");
      return -1;
    }
  } else {
    if (comp == "rock") {
      console.log("Computer Wins! It chose rock");
      return -1;
    } else if (comp == "paper") {
      console.log("You Win!!");
      return 1;
    } else {
      console.log("It is a tie!!");
      return 0;
    }
  }
};

let playGame = () => {
  let humanScore = 0;
  let compScore = 0;

  while (humanScore !== 5 && compScore !== 5) {
    computer = getComputerChoice();
    human = getHumanChoice();
    round = playRound(computer, human);

    if (round === 1) {
      humanScore++;
    } else if (round === -1) {
      compScore++;
    } else {
      continue;
    }

    console.log("Score: " + compScore + " - " + humanScore);
  }

  if (humanScore === 5) {
    console.log("Winner!!");
  } else {
    console.log("Loser!");
  }
};

playGame();
