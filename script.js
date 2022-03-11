"use strict";

// Helper functions
let p = (arg) => console.log(arg);
let upFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Possible signs
const signs = ['rock','paper','scissors'];

function computerPlay () {
    return signs[Math.floor(Math.random() * signs.length)];
}

function playRound (playerSelection, computerSelection) {

    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    //First test for tie
    if (ps === cs) {
        return `You tie! ${upFirst(ps)} is equal to ${upFirst(cs)}`;
    } else {

        if (ps === 'rock') {
            if (cs === 'scissors'){
                return `You win! ${upFirst(ps)} beats ${upFirst(cs)}!`
            } else {
                return `You lose! ${upFirst(ps)} gets beaten by ${upFirst(cs)}!`
            }
        }

        else if (ps === 'paper') {
            if (cs === 'rock'){
                return `You win! ${upFirst(ps)} beats ${upFirst(cs)}!`
            } else {
                return `You lose! ${upFirst(ps)} gets beaten by ${upFirst(cs)}!`
            }
        }

        else if (ps === 'scissors') {
            if (cs === 'paper'){
                return `You win! ${upFirst(ps)} beats ${upFirst(cs)}!`
            } else {
                return `You lose! ${upFirst(ps)} gets beaten by ${upFirst(cs)}!`
            }
        }
    }
    return "Something went wrong";
}


// Testing one round
//let pick = prompt("Rock, Paper or Scissors?");
p(playRound('paper', 'rock'));