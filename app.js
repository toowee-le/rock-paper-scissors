// DOM elements that we need
const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score-board');
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

    console.log(playerChoice, computerChoice, winner);
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

// Event listeners
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', play);
}