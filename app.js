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
    console.log(e.target.id);
}

// Event listeners
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener('click', play);
}