/*

Play against the computer
turn-based with 3 choices
count score
determine winner

*/

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

console.log(getComputerChoice());

