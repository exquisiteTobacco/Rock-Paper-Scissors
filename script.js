const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const answ = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;

function updateScore() {
    // Check for game end conditions and update the message
    if (humanScore === 5) {
        answ.textContent = `You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
        resetGame();
    } else if (computerScore === 5) {
        answ.textContent = `You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`;
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function playRound(humanChoice) {
    const compChoice = computerChoice();
    let result = '';

    if (humanChoice === compChoice) {
        result = `It's a tie! ${humanChoice} ties with ${compChoice} , current score Player = ${humanScore} : Computer = ${computerScore}.`;
    } else if (
        (humanChoice === 'rock' && compChoice === 'scissors') ||
        (humanChoice === 'scissors' && compChoice === 'paper') ||
        (humanChoice === 'paper' && compChoice === 'rock')
    ) {
        result = `You win this round! ${humanChoice} beats ${compChoice} , current score Player = ${humanScore} : Computer = ${computerScore}.`;
        humanScore++;
    } else {
        result = `You lose this round! ${compChoice} beats ${humanChoice} , current score Player = ${humanScore} : Computer = ${computerScore}.`;
        computerScore++;
    }
    answ.textContent = result;
    updateScore();
}

function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) return "rock";
    if (random === 1) return "paper";
    return "scissors";
}

btn1.addEventListener('click', () => playRound("rock"));
btn2.addEventListener('click', () => playRound("paper"));
btn3.addEventListener('click', () => playRound("scissors"));
