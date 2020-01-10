// DOM elements that we need
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score-board');
const modal = document.querySelector('.modal');
const result = document.getElementById('result');
const restart = document.getElementById('restart');

const scoreboard = {
    player: 0,
    computer: 0
}

// Play game
function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showScore(winner, computerChoice);
}

// Get computer's choice
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    if(rand === 0) {
        return 'rock';
    } else if(rand === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Get game winner
function getWinner(player, computer) {
    if(player === computer ) {
        return 'draw';
    } else if(player === 'rock') {
        if(computer === 'scissors') {
            return 'player'; 
        } else {
            return 'computer';
        };
    } else if(player === 'paper') {
        if(computer === 'rock') {
            return 'player';
        } else {
            return 'computer';
        };
    } else if(player === 'scissors') {
        if(computer === 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    }
};

// Show score
function showScore(winner, computerChoice) {
    if (winner === 'player') {
        // Increment player's score
        scoreboard.player++;
        // Show player's result in modal
        result.innerHTML = `
            <h1 class="text-win">You Win!</h1>
            <i class="choice fas fa-hand-${computerChoice} fa-8x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
        // Display player's score on scoreboard
        playerScore.innerHTML = `${scoreboard.player}`;
    } else if (winner === 'computer') {
        // Increment computer's score
        scoreboard.computer++;
        // Show player's result in modal
        result.innerHTML = `
            <h1 class="text-lose">You Lose!</h1>
            <i class="choice fas fa-hand-${computerChoice} fa-8x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
        // Display computer's score on scoreboard
        computerScore.innerHTML = `${scoreboard.computer}`;
    } else {
        result.innerHTML = `
            <h1 class="text-draw">It's a draw!</h1>
            <i class="choice fas fa-hand-${computerChoice} fa-8x"></i>
            <p>Computer chose <strong>${computerChoice}</strong></p>
            `;
        playerScore.innerHTML = `${scoreboard.player}`;
        computerScore.innerHTML = `${scoreboard.computer}`;
    }
    // Display modal with result
    modal.style.display = "block";
    restart.style.display = "block";
}

// Exit modal
function clearModal(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Restart game
function restartGame() {
    // Reset scoreboard to 0
    scoreboard.player = 0;
    scoreboard.computer = 0;
    playerScore.innerHTML = `${scoreboard.player}`;
    computerScore.innerHTML = `${scoreboard.computer}`;
}

// Event listeners
// Get the choice that was clicked on
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', play);
};

// Restart the game when restart button is clicked on
restart.addEventListener('click', restartGame);

// When user clicks outside the modal, hide result modal
window.addEventListener('click', clearModal);