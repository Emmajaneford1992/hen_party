
import { initButtons } from "./dom/buttons";
import { hideSplash, revealGameSelection } from "./dom"
import Game_selection from "./experience";

let game_selection =  new Game_selection();
initButtons();

export function triggerButton(button){
    console.log('button triggered')
    console.log(button, 'button triggered')
    game_selection.triggerButton(button);
}

export function triggerInput(input){
    game_selection.triggerInput(input);
}

export function triggerLetter(letter){
    game_selection.triggerLetter(letter);
}

export function triggerGameButton(trigger){
    game_selection.triggerGameButton(trigger);
}
