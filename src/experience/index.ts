import { revealGame } from "../dom/index";
import Game from "./game";


export default class Game_selection {
    gameName : string;
    game : Game;

    constructor() {
       
       
    }

   
    public triggerButton(key) {
        console.log('button triggered', key);
        // if(this.gameName == 'scrambled_words' || this.gameName == 'emoji_game' || this.gameName == 'finleys_films' || this.gameName == 'fill_the_blanks' || this.gameName == 'face_merge'){
            revealGame();
            this.game =  new Game(key);
        // } 
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
   