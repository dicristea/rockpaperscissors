# rockpaperscissors
What I learned:
- using a branch and merging on git and github
- git pull (on accident)
- animating images and buttons using css hover pseudo class (pngs, gifs)
    - css transition-duration applied to .class, new changes on .class:hover
- text that grows/shrinks with page
- Objects and retrieving info from them
- DOM manipulation using js on events
- usage and DOM manipulation of an object array
- more practice with functions (within functions), if statements, and loops
- practiced using different types of css selectors and focused on proper id usage
- practiced more flexbox (css flexbox is weird)

Tips:
- planning out drafts of the webpage before starting to build is CRUCIAL
- using <a></a> element as a button instead of the <button></button> element
- the button can disappear by making it same color as background, images have border-radius, and on hover src changes to GIF version
- cute footer to use for now: <footer>Made by ddtea. ⚜ 2022.</footer>

To do in future:
- add transition to page change after play click
- Try Again? button should be toggled on once game end
- adjust flexbox settings for wrap and mobile-friendly-ish
- Rohan's face image should shrink

Sources:
Favicon Rohan: <a href="https://custom-cursor.com/en/collection/jojos-bizarre-adventure/jba-rohan-kishibe-pen">

Ken Oyanagi title page img: <a href="https://villains.fandom.com/wiki/Ken_Oyanagi">

paper icon: <a href="https://www.flaticon.com/free-animated-icons/stop" title="stop animated icons">Stop animated icons created by Freepik - Flaticon</a>

scissors icon: <a href="https://www.flaticon.com/free-animated-icons/two" title="two animated icons">Two animated icons created by Freepik - Flaticon</a>

rock icon: <a href="https://www.flaticon.com/free-animated-icons/two" title="two animated icons">Two animated icons created by Freepik - Flaticon</a>

boxing icon: <a href="https://www.flaticon.com/free-animated-icons/boxing" title="boxing animated icons">Boxing animated icons created by Freepik - Flaticon</a>





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
