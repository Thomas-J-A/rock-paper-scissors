let playerScore = 0;
let compScore = 0;

const btns = document.querySelectorAll('button');
btns.forEach(btn => btn.addEventListener('click', e => {
    playerChoice = e.target.getAttribute('id');
    compChoice = computerPlay();
    let result = playRound(playerChoice, compChoice);
    displayCurrentScores(result);
    if (playerScore == 5 || compScore == 5) displayFinalResult();
    else {
        displayResult(result);
        displayChoices(playerChoice, compChoice);
    }
}));

// randomly create computer's choice
function computerPlay() {
    let randInt = createRandInt();
    if (randInt === 0) return 'rock';
    else if (randInt === 1) return 'paper';
    else return 'scissors';
}

// create a random int
let createRandInt = () => Math.floor(Math.random() * 3);

// return result of round (win, loss or draw)
function playRound (playerChoice, compChoice) {
    return whoWins(playerChoice, compChoice);
}

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

// display result of latest round
function displayResult(result) {
    const resultH2 = document.querySelector('#result');
    resultH2.textContent = result;
}

// display player and computer choices for latest round
function displayChoices(playerChoice, compChoice) {
    const choicesPara = document.querySelector('#choices');
    choicesPara.textContent = `${capitalize(playerChoice)} V ${capitalize(compChoice)}`;
}

// capitalize first letter in a word
function capitalize(word) {
    let firstLetter = word.slice(0, 1);
    return word.replace(firstLetter, firstLetter.toUpperCase());
}

// update current score at top of page
function displayCurrentScores(result) {
    if (result === 'You win!') playerScore++;
    else if (result === 'You lose!') compScore++;
    const score = document.querySelector('#score');
    score.textContent = `Player ${playerScore} - ${compScore} Computer`;
}

// display final result screen
function displayFinalResult() {
    btns.forEach(btn => btn.parentNode.removeChild(btn)); // remove btn nodes
    const centerDiv = document.querySelector('.btns'); // change div into img container
    centerDiv.classList.remove('btns');
    centerDiv.classList.add('img-container');
    const img = document.createElement('img');
    img.src = (playerScore == 5) ? 'images/win.jpeg' : 'images/lose.jpeg';
    centerDiv.appendChild(img);
    const resultH2 = document.querySelector('#result'); // show final result
    resultH2.textContent = (playerScore == 5) ? 'YOU WIN!' : 'YOU LOSE!';
    const choicesPara = document.querySelector('#choices'); // remove choices p element
    choicesPara.parentNode.removeChild(choicesPara);
    const resultsContainer = document.querySelector('.results-container');
    const resetBtn = document.createElement('button'); // create play again button
    resetBtn.setAttribute('id', 'play-again');
    resetBtn.textContent = 'Play Again';
    resetBtn.addEventListener('click', resetScreen);
    resultsContainer.appendChild(resetBtn);
}

// reload screen to play another game
let resetScreen = () => window.location.reload();




/*

// original game logic without UI
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

*/