# rockpaperscissors

Sources:
Favicon Rohan: https://custom-cursor.com/en/collection/jojos-bizarre-adventure/jba-rohan-kishibe-pen
Ken Oyanagi title page img: https://villains.fandom.com/wiki/Ken_Oyanagi



https://www.theodinproject.com/lessons/foundations-rock-paper-scissors


First Completed Console-Only Game JS
<script>

        function computerPlay() {
            let computerNum = Math.floor(Math.random() * 3);

            if (computerNum == 0) {
              return "Rock"
            } else if (computerNum == 1) {
              return "Paper"
            } else if (computerNum == 2) {
              return "Scissors"
            } else {
                return "Falty";
            }
        }

        // playerSelection takes user input case-insensitive
        
        function playRound(playerSelection, computerSelection) {
            let lowerPlayerSelection = playerSelection.toLowerCase()

            if (lowerPlayerSelection == computerSelection.toLowerCase()) {
                return "You tie!";

            } else if (lowerPlayerSelection == "rock") {
                if (computerSelection == "Paper") {
                    return "Comptuer wins!";
                } else if (computerSelection == "Scissors") {
                    return "Player wins!";
                }

            } else if (lowerPlayerSelection == "paper") {
                if (computerSelection == "Rock") {
                    return "Comptuer wins!";
                } else if (computerSelection == "Scissors") {
                    return "Player wins!";
                }

            } else if (lowerPlayerSelection == "scissors") {
                if (computerSelection == "Rock") {''
                    return "Comptuer wins!";
                } else if (computerSelection == "Paper") {
                    return "Player wins!";
                }

            } else {
                return "falty";
            }
        }



        // Play 1 round
        // if "Player wins!" => playerScore++; 
        // else if "Comptuer wins!" => computerScore++; 
        // else "You tie!" => run playRound again
        // times 5
        // if playerScore > computerScore, return "You won the game!"
        // else "You lost the game..."

        function game() {
            let playerScore, computerScore, winner;
            let computerSelection, playerSelection;
            playerScore = 0;
            computerScore = 0;
            
            for (let i = 0; i < 5; i++) {
                
                playerSelection = prompt("Rock, Paper, or Scissors?", "");
                computerSelection = computerPlay();
                console.log(playerSelection);
                console.log(computerSelection);

                winner = playRound(playerSelection, computerSelection);
                console.log(winner);

                if (winner === "Player wins!") {
                    playerScore++;
                } else if (winner === "Comptuer wins!") {
                    computerScore++;
                } else { 
                    playRound(playerSelection, computerSelection);
                }

                console.log(playerScore);
                console.log(computerScore);
            }

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

        console.log(game());

    </script>