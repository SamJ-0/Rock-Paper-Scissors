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
    let humanChoice = humanInput.toLowerCase();

    return humanChoice[0].toUpperCase() + humanChoice.slice(1);
}

console.log(getComputerChoice());
console.log(getHumanChoice());
