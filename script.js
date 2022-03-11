"use strict";

// Helper functions
let p = (arg) => console.log(arg);
let upFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

// Main functions
function computerPlay () {
    const signs = ['rock','paper','scissors'];
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

function game () {
    let p_score = 0;
    let c_score = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(
            prompt("Rock, paper or scissors", computerPlay()), 
            computerPlay());
        
        // Find out score
        let res = result.slice(0,5);
        if (res === "You w") {
            p_score+=1;
        } else if (res === "You l") {;
            c_score+=1;
        } 


        p(result);
    }

    p(`Score > Player: ${p_score} | Computer ${c_score}`);
}

game();