// Simple function to get the computer choice.
function computerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Simple function to get human answer.
function getHumanChoice() {
    let humanAnswer = prompt("What is your choice? (rock, paper, or scissors)");
    return humanAnswer.toLowerCase();
}

// Function for playing a round that determines who is the winner and adds score. Returns a string.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        return `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
}

// Main function to play the game.
function playGame() {
    // Variables for keeping the score of the game
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let compChoice = computerChoice();
        let result = playRound(humanChoice, compChoice);
        alert(result); // Display the result of each round
        
        // Update the scores based on the round result
        if (result.startsWith('You win')) {
            humanScore++;
        } else if (result.startsWith('You lose')) {
            computerScore++;
        }
    }
    
    // Display the final scores and winner
    if (humanScore > computerScore) {
        alert(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        alert(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        alert(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();
