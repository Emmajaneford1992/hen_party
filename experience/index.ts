import { revealGame } from "../dom/index";
import Game from "./game";


let scrambled_words_button  = <HTMLElement>document.querySelector('.scrambled_words_button')

scrambled_words_button.addEventListener('click', () =>{
    console.log('scrambled words button pressed');
})


export default class Game_selection {
    gameName : string;
    game : Game;

    constructor() {
       
        console.log('game_selection')
    }

    public triggerButton(button) {
        console.log('button triggered', button);
        this.gameName = button.replace('_button','');

        if(this.gameName == 'scrambled_words' || this.gameName == 'emoji_game' || this.gameName == 'finleys_films' || this.gameName == 'fill_the_blanks' || this.gameName == 'face_merge'){
            revealGame();
            this.game =  new Game(this.gameName);
        } 
    }

    public triggerLetter(letter){
        this.game.triggerLetter(letter);
    }

    public triggerInput(event){
        this.game.triggerInput(event);
    }

    public triggerGameButton(trigger){
        this.game.triggerGameButton(trigger);
    }


  }
   