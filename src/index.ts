
import { initButtons } from "./dom/buttons";
import { init, revealCelebration, revealFoundHeart, revealSplash } from "./dom"
import Game_selection from "./experience";
import { getUrlParams } from "../queryString";
//import { getUrlParams } from "../queryString";
import scavengerInfo  from './experience/utils/scavengerInfo.json';
import irlGameInfo  from './experience/utils/irlGameInfo.json';

let game_selection =  new Game_selection();
initButtons();

let params = getUrlParams();

let foundHeart = false
let gameComplete = false



Object.entries(scavengerInfo).forEach(([key, value], index) => {
    if(value.heartToken == params){
        console.log('found heart', params)
        localStorage.setItem(value.heartToken, 'found');
        foundHeart = true;
    }
})


Object.entries(irlGameInfo).forEach(([key, value], index) => {
    if(value.token == params){
        console.log('game complete, token:', params)
        localStorage.setItem(key, '10');
        gameComplete = true;
    }
})


if(foundHeart){
    revealFoundHeart()
}
else if(gameComplete){
    revealCelebration();
}
else{
    revealSplash();
}
init();




export function triggerButton(button, game){
    console.log('button triggered')
    console.log(button, 'button triggered')
    game_selection.triggerButton(button, game);
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
