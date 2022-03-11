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
    // You either win, lose or tie.
    let ps = playerSelection.toLowerCase();
    let cs = computerSelection.toLowerCase();

    if (ps === cs) {
        return `You tie! ${ps}`
    }
}