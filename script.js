

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
        case "scissors":
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

    function game() {
        let index = 0;
        let wins = 0;
        let playerSelection = prompt("Please input Rock, Paper or Scissors", "rock")
        let computerSelection = computerPlay();
        while(index < 5){

            let outcome =  playRound(playerSelection, computerSelection);
            console.log("Player: " + playerSelection + " Computer: " + computerSelection + " Outcome: " + outcome)

            if(outcome == "Win"){
                wins++;
            }

            playerSelection = prompt("Please input Rock, Paper or Scissors", "rock")
            computerSelection = computerPlay();
            index++;
        }
        console.log("Wins: " + wins)

    }

    game();



    


