
let playerSelection = "rock"
let computerSelection = computerPlay();
console.log("Player: " + playerSelection + " Computer: " + computerSelection + " Outcome: " + playRound(playerSelection, computerSelection))

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    console.log(randNum);
    switch(randNum){
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default: 
            return "rock";
        }
    }

function playRound(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'rock':
                    return "Tie";
                case 'paper':
                    return "Loss";
                case "scissors":
                    return "Win";
            }

        case 'paper':
            switch(computerSelection){
                case 'rock':
                    return "Win";
                case 'paper':
                    return "Tie";
                case "scissors":
                    return "Loss";
            }
        case "scissor":
            switch(computerSelection){
                case 'rock':
                    return "Loss";
                case 'paper':
                    return "Win";
                case "scissors":
                    return "Tie";
            }
        }
    }


