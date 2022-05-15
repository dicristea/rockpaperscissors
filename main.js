// listen for button click = playerSelection
// play round with computer play and return roundWinner


let playerWins = document.getElementById('playerWins');
let computerWins = document.getElementById('computerWins');

// playerSelection
let buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn => btn.addEventListener('click', getPlayerChoice));


function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);
}


function computerPlay() {
    let computerNum = Math.floor(Math.random() * 3);

    if (computerNum == 0) {
      return "rock"
    } else if (computerNum == 1) {
      return "paper"
    } else if (computerNum == 2) {
      return "scissors"
    } else {
        return "Falty";
    }
}


let playerScore, computerScore, winner;
    playerScore = 0;
    computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        winner = "You tie!";

    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            winner = "Comptuer wins!";
        } else if (computerSelection == "scissors") {
            winner = "Player wins!";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "Comptuer wins!";
        } else if (computerSelection == "scissors") {
            winner = "Player wins!";
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {''
            winner = "Comptuer wins!";
        } else if (computerSelection == "paper") {
            winner = "Player wins!";
        }

    } else {
        return "falty";
    }

    if (winner === "Player wins!") {
        // playerScore++;
        playerWins.textContent += playerScore++;
    } else if (winner === "Comptuer wins!") {
        // computerScore++;
        computerWins.textContent += computerScore++;
    } else if (winner === "You tie!") { 
            return "Play again.";
    } else return "Falty"

}


function updateGameScore(roundWinner) {


    if (playerScore > computerScore) {
        return "You won the game!"
    } else if (playerScore == computerScore) {
        return "You tied."
    } else if (playerScore < computerScore) {
        return "You lost the game...";
    } else {
      return "Falty";
    }
}

// console.log(game());
