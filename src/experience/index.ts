import { revealGame } from "../dom/index";
import Game from "./game";


export default class Game_selection {
    gameName : string;
    game : Game;

    constructor() {
       
       
    }
   
    public triggerButton(key, game) {
        console.log('button triggered', key);
        revealGame();
        this.game =  new Game(key, game);
        
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
   