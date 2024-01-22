function getComputerChoice()
{
    
    let choice = Math.floor(Math.random() * 3);
    let a; 
    if(choice === 0)
    {
        a = "rock";
    }
    else if(choice === 1)
    {
        a = "paper";
    }
    else if (choice === 2)
    {
        a = "scissors";
    }
    return(a);
    
}
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        return("Tie");
    }
    if(playerSelection  == "rock")
    {
        if(computerSelection == "scissors")
        {
            return("You win!");
        }
        else if(computerSelection == "paper")
        {
            return("You lose!");
        }
    }
    if(playerSelection == "paper")
    {
        if(computerSelection == "rock")
        {
            return("You win!");
        }
        else if(computerSelection == "scissors")
        {
            return("You lose!");
        }
        
    }
    (playerSelection == "scissors")
    {
        if(computerSelection == "paper")
        {
            return("You win!");
        }
        else if(computerSelection == "rock")
        {
            return("You lose!");
        }
        
    }
}
function game()
{
    console.log("Now you will play a best of 5 of rock, paper, scicors");
    let playerInput;
    let result;
    let playerResult , compResult;
    for(let i = 0; i < 5; i++)
    {
      playerInput = prompt("Enter your choice:");

      result = playRound(playerInput, getComputerChoice());
      if (result == "Tie")
      {
        i--;
        console.log("Tie! Play again.");
      }
      else if(result == "You win!")
      {
       playerResult++;
       console.log("You win! +1 point for you.")
      }
      else if(result == "You lose!")
      {
        compResult++;
        console.log("You lose! +1 point for comp.");
      }

    }
    if(playerResult > compResult)
    {
        console.log("Player wins!");
    }
    else
    {
        console.log("Comp wins!");
    }
}



const computerSelection = getComputerChoice();
game();
