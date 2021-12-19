
const buttons = document.querySelectorAll(".button");
let gamesPlayed = 0;




buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      let move = button.id;
      computerMove = computerPlay();
      let outcome = (playRound(move, computerMove));


      let notifText = `Computer played ${computerMove}, you played ${move}`;
      let notif = document.querySelector('.notif');
      notif.textContent = notifText;      

      scoreboard = document.getElementById(outcome.toLowerCase());
      scoreboardText = scoreboard.textContent;
      newScore = Number(scoreboardText.split(" ")[1])+1;
      scoreboardText = scoreboardText.split(" ")[0] + " " + newScore.toString();
      scoreboard.innerText = scoreboardText;
      gamesPlayed++;
      checkGameCondition();
      
    });
  });

  function checkGameCondition() {
    if(gamesPlayed >= 5){
        //game ended
        gameOutcome = checkOutcome();
        let alertText = `Game is over. You ${gameOutcome}! Click okay to restart`;
        alert(alertText);

        resetGame();

    }
  }

  function checkOutcome(){
      let scoreStrings = document.querySelectorAll('.score p');
      let scores = Array.from(scoreStrings).map(function(element){
            return element.textContent.split(" ")[1];
           });
      if(scores[0] > scores[1]){
           return "win";}
      else if(scores[0]< scores[1]){
           return "lose";}
      else{return "tie";}
  }

  function resetGame(){
    let scoreStrings = document.querySelectorAll('.score p');
    let scores = Array.from(scoreStrings).forEach(function(element){
        element.innerText = element.innerText.split(" ")[0] + " " + 0;
    });
    gamesPlayed = 0;
  }



function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
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
        let computerSelection = computerPlay();
        while(index < 5){
            // let playerSelection = prompt("Please input Rock, Paper or Scissors", "rock")
            computerSelection = computerPlay();
            let outcome =  playRound(playerSelection, computerSelection);
            console.log("Player: " + playerSelection + " Computer: " + computerSelection + " Outcome: " + outcome)

            if(outcome == "Win"){
                wins++;
            }

            
            index++;
        }
        console.log("Wins: " + wins)

    }

    // game();




    


