//Simple function to get the computer choice.
function computerChoice() {
    let random = Math.floor((Math.random() * 3) + 1);
    
    if (random == 1){
      return "rock";
    }
    else if(random == 2)
    {
      return "paper";
    }
    else{
        return "scissors";
    }
    
    
}
console.log(computerChoice());
//Simple function to get human answer.
function getHumanChoice(){
    let humanAnswer = prompt("What is your choice?");
    
    return humanAnswer;
}
// Variables for keeping the score of the game
let humanScore = 0;
let computerScore = 0;
