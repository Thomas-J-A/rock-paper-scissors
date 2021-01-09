const container = document.querySelector('.container');
            let playerWins = 0;
            let compWins = 0;

            const submitBtn = document.querySelector('#submit');
            
            
            const btns = document.querySelectorAll('button');
            btns.forEach(btn => btn.addEventListener('click', e => {
                playerChoice = e.target.getAttribute('id');
                compChoice = computerPlay();
                let result = playRound(playerChoice, compChoice);
                displayCurrentScores(result);
                if (playerWins == 5 || compWins == 5) { // check if there is a winner
                    //displayCurrentScores(result);
                    displayFinalResult();
                } else {
                    displayResult(result);
                    displayChoices(playerChoice, compChoice);
                }
            }));


            // display final result screen
            function displayFinalResult() {
                const resultPara = document.querySelector('#result'); // update p node to show final result
                resultPara.textContent = (playerWins == 5) ? 'YOU WIN' : 'YOU LOSE';
                const choicesPara = document.querySelector('#choices'); // remove choices p node
                container.removeChild(choicesPara);
                btns.forEach(btn => btn.parentNode.removeChild(btn)); // remove btn nodes
                const div = document.querySelector('.btns');
                div.classList.remove('btns') // change div class 
                div.classList.add('img-container');
                const img = document.createElement('img');
                img.src = (playerWins == 5) ? 'images/win.jpeg' : 'images/lose.jpeg';
                div.appendChild(img);
            }



            // display result of latest round
            function displayResult(result) {
                const resultPara = document.querySelector('#result');
                resultPara.textContent = result;
            }

            // display player and computer choices for latest round
            function displayChoices(playerChoice, compChoice) {
                const choicesPara = document.querySelector('#choices');
                choicesPara.textContent = `${playerChoice} V ${compChoice}`;
            }

            // update current score at top of page
            function displayCurrentScores(result = null) {
                if (result === 'You win!') playerWins++;
                else if (result === 'You lose!') compWins++;
                const scores = document.querySelector('#scores');
                scores.textContent = `Player ${playerWins} - ${compWins} Computer`;
            }

            // randomly create computer's choice
            function computerPlay() {
                let randInt = createRandInt();
                if (randInt === 0) return 'rock';
                else if (randInt === 1) return 'paper';
                else return 'scissors';
            }

            // return result of round (win, loss or draw)
            function playRound (playerChoice, compChoice) {
                return whoWins(playerChoice, compChoice);
            }







            // helper functions


            // create a random int
            let createRandInt = () => Math.floor(Math.random() * 3);

            // return result of round (win, loss or draw)
            function whoWins(player, comp) {
                if (player === 'rock' && comp === 'rock' || player === 'paper' && comp === 'paper' ||
                    player === 'scissors' && comp === 'scissors') {
                    return 'It\'s a tie!';
                } else if (player === 'rock' && comp === 'scissors' || player === 'paper' && comp === 'rock' ||
                           player === 'scissors' && comp === 'paper') {
                               return 'You win!';
                } else return 'You lose!';
            }










            function game() {
                let playerWins = 0;
                let computerWins = 0;
                for (let i = 0; i < 5; i++) {
                    let playerSelection = prompt('Rock, Paper or Scissors?', '');
                    let computerSelection = computerPlay();
                    let result = playRound(playerSelection, computerSelection);
                    if (result === 'You win!') {
                        playerWins++
                    } else if (result === 'You lose!') {
                        computerWins++
                    }
                    console.log(result);
                }
                if (playerWins > computerWins) {
                    console.log('And the winner is...you!');
                } else if (playerWins < computerWins) {
                    console.log('And the winner is...the computer!');
                } else {
                    console.log('And the winner is...it\'s a tie!');
                }
            }