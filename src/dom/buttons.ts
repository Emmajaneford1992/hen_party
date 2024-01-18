import { hideCelebration, hideGame, hideGameSelection, hideSplash, revealGameSelection } from "../dom";
import  { triggerButton, triggerGameButton } from "../index";

let game_backButton = <HTMLButtonElement>document.querySelector('.game_backButton');
let celebration_button = <HTMLButtonElement>document.querySelector('.celebration button');
let game_restartButton = <HTMLButtonElement>document.querySelector('.game_restartButton');

let buttonNames =[
    'splash_button',
    'scavenger_hunt_button', 
    'scrambled_words_button', 
    'fill_the_blanks_button', 
    'emoji_game_button', 
    'harry_hunt_button', 
    'finleys_films_button', 
    'face_merge_button', 
    'ring_toss_button', 
    'bra_pong_button', 
    'photo_challenge_button']

export function initButtons() {
    buttonNames.forEach(buttonName => {
        let button = <HTMLButtonElement>document.querySelector('.' + buttonName);
        button.addEventListener('click', () =>{
            console.log(buttonName, 'pressed') 
            if(buttonName == 'splash_button'){
                hideSplash(); 
                revealGameSelection(); 
            }
            else{
                hideGameSelection(); 
                triggerButton(buttonName)
            }
        })
    });

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



 

}