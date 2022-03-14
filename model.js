"use strict";

// Helper functions
let p = (arg) => console.log(arg);

// Capitilize first letter string
let capFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);


// Main functions
function computerPlay () {
    const signs = ['Rock','Paper','Scissors'];
    // This is how you pick an item randomly from an array in JS
    return signs[Math.floor(Math.random() * signs.length)];
}


function playRound (playerSelection, computerSelection = computerPlay()) {
    let ps = capFirst(playerSelection.toLowerCase());
    let cs = capFirst(computerSelection.toLowerCase());
    //First test for tie
    if (ps === cs) {
        return `You tie! ${ps} is equal to ${cs}`;
    } else {
        //Then test for each possible player input
        if (ps === 'Rock') {
            if (cs === 'Scissors'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
        else if (ps === 'Paper') {
            if (cs === 'Pock'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
        else if (ps === 'Scissors') {
            if (cs === 'Paper'){
                return `You win! ${ps} beats ${cs}!`
            } else {
                return `You lose! ${ps} gets beaten by ${cs}!`
            }
        }
    }
    return `${playerSelection} is invalid.`;
}


function updateScore (score, result) {
    let res = result.slice(0,5);
    if (res === "You w") { // Player wins
        score[0] += 1;
    } else if (res === "You l") { // Computer wins
        score[1] += 1;
    } 
}


function showScore(score) {
    p(`Score > Player: ${score[0]} | Computer ${score[1]}`);
}

// CONTROLLER LOGIC

function playNdisplay (e) {
    const pSign = e.target.value;
    const result = playRound(pSign);
    resultDisplay.textContent = result;
}


const resultDisplay = document.querySelector('.result-display');
const playerInput = document.querySelectorAll('.player-input');
playerInput.forEach(btn => btn.addEventListener('click', playNdisplay));