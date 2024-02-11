
import { initButtons } from "./dom/buttons";
import { revealFoundHeart, revealSplash } from "./dom"
import Game_selection from "./experience";
import { getUrlParams } from "../queryString";
//import { getUrlParams } from "../queryString";

let game_selection =  new Game_selection();
initButtons();

let params = getUrlParams();

if(params == null){
    console.log('splash')
    revealSplash();
}
else{
    console.log('found heart', params)
    revealFoundHeart()
}


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
