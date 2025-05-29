/*

Play against the computer
turn-based with 3 choices
count score
determine winner

*/

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 4);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors"
    }

}

function getHumanChoice() {
    let humanInput = prompt("Do you want to play Rock, Paper or Scissors?");
    let choice = humanInput.toLowerCase();

    return choice[0].toUpperCase() + choice.slice(1);
}

// Rock beats scissors
// Paper beats rock
// Scissors beats paper

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } 
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } 
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        return console.log("You win! " + humanChoice + " beats " + computerChoice);
    } 
    else if (computerChoice === "Rock" && humanChoice === "Scissors") {
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } 
    else if (computerChoice === "Paper" && humanChoice === "Rock") {
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } 
    else if (computerChoice === "Scissors" && humanChoice === "Paper") {
        return console.log("You lose! " + computerChoice + " beats " + humanChoice);
    } else {
        return console.log("It's a draw! You both played: " + humanChoice);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);