function decideComputerChoice() {
    let computerChoice1;

    computerChoice1 = Math.floor(Math.random() * 3);
    if (computerChoice1 === 0) {
        console.log("C: rock")
        return "rock";
    }
    else if (computerChoice1 === 1) {
        console.log("C: paper")
        return "paper";
    }
    else {
        console.log("C: scissor")
        return "scissor";
    }
}

function decideWinner(computerChoice, playerChoice) {

    if (computerChoice === "rock" && playerChoice === "rock") {
        console.log("tie");
        round--;
        return;
    }
    else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("Player wins");
        userWins++;
        return;
    }
   else if (computerChoice === "rock" && playerChoice === "rock") {
        console.log("tie");
        return;
    }
    else if (computerChoice === "rock" && playerChoice === "scissor") {
        console.log("Computer wins");
        computerWins++;
    }
    else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log("Computer wins");
        computerWins++;
    }
    else if (computerChoice === "paper" && playerChoice === "paper") {
        console.log("tie");
        round--;
        return;
    }
    else if (computerChoice === "paper" && playerChoice === "scissor") {
        console.log("Player wins");
        userWins++;
        return;
    }
    else if (computerChoice === "scissor" && playerChoice === "rock") {
        console.log("Player wins");
        userWins++;
        return;
    }
    else if (computerChoice === "scissor" && playerChoice === "paper") {
        console.log("Computer wins");
        computerWins++;
    }
    else if (computerChoice === "scissor" && playerChoice === "scissor") {
        console.log("tie");
        round--;
        return;
    }
}

function update_scorebaord() {
    scoreboard.textContent = "computer wins: " + computerWins + "\nplayer wins: " + userWins
}

function decide_overall_winner() {
    if (computerWins === 5) {
        const overall_winner = document.createElement("div");
        overall_winner.textContent = "COMPUTER DEFEATS HUMANS FROM BEST OF 5"
        scoreboard.appendChild(overall_winner)
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
    if (userWins === 5) {
        const overall_winner = document.createElement("div");
        overall_winner.textContent = "USER DEFEATS HUMANS FROM BEST OF 5"
        console.log("user wins OVERALL")
        scoreboard.appendChild(overall_winner)
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
    }
}


let computerWins = 0;
let userWins = 0;
let gameResult;
let computerChoice;
let round = 0;

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const scoreboard = document.querySelector("scoreboard");

rock.addEventListener("click", function() {
    //upon click a game of RPS is run against a computer
    //(computer choice is random) user choice is rock
    //scoreboard is updated after game is run 
    userChoice = "rock";
    computerChoice = decideComputerChoice();
    decideWinner(computerChoice,userChoice);
    update_scorebaord();
    decide_overall_winner();
});

paper.addEventListener("click", function() {
    //upon click a game of RPS is run against a computer
    //(computer choice is random) user choice is paper
    //scoreboard is updated after game is run 
    userChoice = "paper";
    computerChoice = decideComputerChoice();
    decideWinner(computerChoice,userChoice);
    update_scorebaord();
    decide_overall_winner();
});

scissor.addEventListener("click", function() {
    //upon click a game of RPS is run against a computer
    //(computer choice is random) user choice is scissor
    //scoreboard is updated after game is run 
    userChoice = "scissor";
    computerChoice = decideComputerChoice();
    decideWinner(computerChoice,userChoice);
    update_scorebaord()
    decide_overall_winner();
});






