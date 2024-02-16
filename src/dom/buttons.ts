import { hideCelebration, hideFoundHeart, hideGame, hideGameSelection, hideScavenger, hideSplash, init, revealGameSelection, revealScavenger, updateScavengeScore } from "../dom";
import  { triggerGameButton } from "../index";

let splash_button = <HTMLButtonElement>document.querySelector('.splash_button');
let scavenger_hunt_button = <HTMLButtonElement>document.querySelector('.scavenger_hunt_button');
let scavenger_backButton = <HTMLButtonElement>document.querySelector('.scavenger_backButton');
let game_backButton = <HTMLButtonElement>document.querySelector('.game_backButton');
let celebration_button = <HTMLButtonElement>document.querySelector('.celebration button');
let foundHeart_button = <HTMLButtonElement>document.querySelector('.foundHeart button');
let game_restartButton = <HTMLButtonElement>document.querySelector('.game_restartButton');

export function initButtons() {

    splash_button.addEventListener('click', () =>{
        hideSplash(); 
        revealGameSelection();
    })

    scavenger_hunt_button.addEventListener('click', () =>{
        hideGameSelection(); 
        revealScavenger();
        updateScavengeScore();
    })

    scavenger_backButton.addEventListener('click', () =>{
        hideScavenger();
        revealGameSelection(); 

    })

    game_backButton.addEventListener('click', () => {
        hideGame();
        revealGameSelection();
    });

    game_restartButton.addEventListener('click', () => {
        triggerGameButton('restart');  
    });

    celebration_button.addEventListener('click', () => {
        hideCelebration();
        revealGameSelection();
    });

    foundHeart_button.addEventListener('click', () => {
        hideFoundHeart();
        revealGameSelection();

    });
}