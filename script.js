// script.js
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
}

let playerScore = 0;
let compScore = 0;

document.getElementById('choices').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const playerSelection = event.target.id;
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        document.getElementById('player-choice').innerText = `Your Choice: ${playerSelection}`;
        document.getElementById('computer-choice').innerText = `Computer's Choice: ${computerSelection}`;
        document.getElementById('round-result').innerText = `Round Result: ${result}`;

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            compScore++;
        }

        document.getElementById('player-score').innerText = playerScore;
        document.getElementById('comp-score').innerText = compScore;
    }
});

document.getElementById('play-again').addEventListener('click', function() {
    playerScore = 0;
    compScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('comp-score').innerText = compScore;
    document.getElementById('results').innerText = '';
    document.getElementById('play-again').style.display = 'none';
});

