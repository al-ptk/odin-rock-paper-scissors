"use strict";

// Helper functions
let p = (arg) => console.log(arg);

// Capitilize first letter string
let capFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);



// Main functions
function computerPlay () {
    const signs = ['rock','paper','scissors'];

    // This is how you pick an item randomly from an array in JS
    return signs[Math.floor(Math.random() * signs.length)];
}


function playRound (playerSelection, computerSelection) {

    let playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerSelection.toLowerCase();

    //First test for tie
    if (playerSelection === computerSelection) {
        return `You tie! ${capFirst(playerSelection)} is equal to ${capFirst(computerSelection)}`;
    } else {

        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors'){
                return `You win! ${capFirst(playerSelection)} beats ${capFirst(computerSelection)}!`
            } else {
                return `You lose! ${capFirst(playerSelection)} gets beaten by ${capFirst(computerSelection)}!`
            }
        }

        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock'){
                return `You win! ${capFirst(playerSelection)} beats ${capFirst(computerSelection)}!`
            } else {
                return `You lose! ${capFirst(playerSelection)} gets beaten by ${capFirst(computerSelection)}!`
            }
        }

        else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper'){
                return `You win! ${capFirst(playerSelection)} beats ${capFirst(computerSelection)}!`
            } else {
                return `You lose! ${capFirst(playerSelection)} gets beaten by ${capFirst(computerSelection)}!`
            }
        }
    }
    return "Something went wrong";
}


function game () {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(
            prompt("Rock, paper or scissors", computerPlay()), 
            computerPlay());
        
        // Find out score
        let res = result.slice(0,5);
        if (res === "You w") {
            playerScore+=1;
        } else if (res === "You l") {;
            computerScore+=1;
        } 

        p(result);
    }

    p(`Score > Player: ${playerScore} | Computer ${computerScore}`);
}


game();