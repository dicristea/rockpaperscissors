// Section: Rohan's Buttons
const states = [
  {
    'name': "rock",
    'default': "/home/diana/repos/rockpaperscissors/images/rock.png",
    'hover': "/home/diana/repos/rockpaperscissors/images/rock.gif"
  },
  {
    'name': "paper",
    'default': "images/paper.png",
    'hover': "images/paper.gif"
  },
  {
    'name': "scissors",
    'default': "images/scissors.png",
    'hover': "images/scissors.gif"
  }
];

let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let choicesArray = [rock, paper, scissors];


for (i = 0; i < choicesArray.length; i++) {
    let choices = choicesArray[i];
    let hover = states[i].hover;
    let static = states[i].default;

    choices.addEventListener('mouseenter', function(e) {
        choices.setAttribute('src', hover);
    })

    choices.addEventListener('mouseleave', function(e) {
        choices.setAttribute('src', static);
    })
};


// Section: Player and Computer Selection 

let playerWins = document.querySelector('.playerScore');
let computerWins = document.querySelector('.computerScore');
let buttons = document.querySelectorAll('.buttons');
buttons.forEach(btn => btn.addEventListener('click', getPlayerChoice));


function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection,computerSelection);

    let image = document.getElementById("computerChoice");

    if (computerSelection == "rock") {
        image.src='/home/diana/repos/rockpaperscissors/images/rock.png';
    } else if (computerSelection == "paper") {
        image.src='/home/diana/repos/rockpaperscissors/images/paper.png';
    } else if (computerSelection == "scissors") {
        image.src='/home/diana/repos/rockpaperscissors/images/scissors.png';
    };
};


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

};


// Section: Player Gameplay

let playerRight = document.querySelector('.player-right');
let computerRight = document.querySelector('.computer-right');
let playersPick = document.querySelector('.players-pick');

let playerScoreDisplay = document.querySelector('.player-score-display');
let compScoreDisplay = document.querySelector('.comp-score-display');
let parentGameBody = document.querySelector('.parent-gamebody');
let playerScore, computerScore, winner, link;
    playerScore = 0;
    computerScore = 0;

function updateGame (playerScore, computerScore){

    if (playerScore > 2 || computerScore > 2) {
        playerRight.removeChild(playersPick);
        playerRight.className = 'player-right retry';

        if (playerScore > 2) {
            playerRight.textContent = "You won! But... would you like to try again?"; // 
        } else if (computerScore > 2) {
            playerRight.textContent = "Your stand was taken! You lost but... would you like to try again?"; // 
        } else {
            return "Falty"
        };

    } else return;
};


function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        winner = "You tie!";

    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            winner = "Computer wins!";
        } else if (computerSelection == "scissors") {
            winner = "Player wins!";
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            winner = "Player wins!";
        } else if (computerSelection == "scissors") {
            winner = "Player wins!";
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {''
            winner = "Computer wins!";
        } else if (computerSelection == "paper") {
            winner = "Player wins!";
        }

    } else {
        return "falty";
    }

    console.log(winner);

    if (winner === "Player wins!") {
        playerScore++;
        playerWins.textContent = playerScore;
    } else if (winner === "Computer wins!") {
        computerScore++;
        computerWins.textContent = computerScore;
    } else if (winner === "You tie!") { 
            return "Play again.";
    } else return "Falty"

    updateGame(playerScore, computerScore);
};