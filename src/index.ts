
import { initButtons } from "./dom/buttons";
import { revealFoundHeart, revealSplash } from "./dom"
import Game_selection from "./experience";
import { getUrlParams } from "../queryString";
//import { getUrlParams } from "../queryString";
import scavengerInfo  from './experience/utils/scavengerInfo.json';

let game_selection =  new Game_selection();
initButtons();

let params = getUrlParams();

let foundHeart = false



Object.entries(scavengerInfo).forEach(([key, value], index) => {
    if(value.heartToken == params){
        console.log('found heart', params)
        localStorage.setItem(value.heartToken, 'found');
        foundHeart = true;
    }
  
})

if(foundHeart){
    revealFoundHeart()
}
else{
    revealSplash();
}



// if(params == null){
//     console.log('splash')
//     revealSplash();
// }
// if()
//     console.log('found heart', params)
//     localStorage.getItem(value.heartToken);
//     revealFoundHeart()
// }


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
