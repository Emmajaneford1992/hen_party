import {  addLetterToScrambledWord, createGameRound,  hideGame, revealCelebration, selectScrambledLetter, setGameDescription, setGameScore, setGameTitle, setWord } from "../dom/index";
import gameInfo  from './utils/gameInfo.json'


export default class Game {
    private round : number;
    private gameName : string
    private question : string;
    private answer : string;
    private numOfRounds : number;
    private userAnswer : string
    private answerLength : number;
    

    constructor(gameName) {
        this.gameName = gameName
        this.numOfRounds = Object.keys(gameInfo[this.gameName].rounds).length;
        this.initGame();
    }

    public initGame(){
        console.log('init game', this.gameName)
        this.round = 0;
        setGameTitle(gameInfo[this.gameName].title);
        setGameDescription(gameInfo[this.gameName].description);
        this.generateRound()
    }

    public generateRound() {
        this.question = gameInfo[this.gameName].rounds[this.round].question;
        this.answer = gameInfo[this.gameName].rounds[this.round].answer;
        this.answerLength = this.answer.replaceAll(' ', '').length;

        setGameScore(this.round +"/"+ this.numOfRounds)
        createGameRound(this.gameName, this.question, this.round, this.answer);
        this.userAnswer = this.gameName == 'fill_the_blanks' ? this.question : '';
    }

    public triggerInput(event){
        console.log('triggerinput')
        if((event as InputEvent).inputType == 'deleteContentBackward'){
            if(this.gameName == 'scrambled_words'){
                this.triggerBackspace();
            }
            this.userAnswer = event.target.value;
            this.updateWord();
        }

        let letter = (event as InputEvent).data;
        if(letter != null){
            if(letter.match(/[a-z]/i)){
                if(this.gameName == 'scrambled_words'){
                    let letterSelected = false
                    for(let i = 0; i < this.question.length; i++){
                        if(this.question.charAt(i) == letter && !letterSelected){
                            this.question.replace(letter,'');
                            this.userAnswer = this.userAnswer + letter;
                            selectScrambledLetter(letter)
                            letterSelected  = true;
                        }
                    }
                }
                else if(this.gameName == 'fill_the_blanks'){
                    let vowels = 'iouea';
                    for(let i = 0; i < vowels.length; i++){
                        if(this.question.charAt(i) == letter){
                            this.question.replace(letter,'');
                            this.userAnswer = letter;
                        }
                    }
                }
                else{
                    this.userAnswer = this.userAnswer + letter;
                }
            }
        }
    
        this.updateWord()
    }

    public triggerLetter(letter){
        console.log('triggerletter', letter)
        this.userAnswer = this.gameName == 'scrambled_words' ? this.userAnswer + letter : this.userAnswer.replaceAll('_', letter);
        console.log(this.userAnswer)
        this.updateWord();   
    }

    public triggerBackspace(){
        let charRemoved = this.userAnswer.charAt(this.userAnswer.length-1);
        addLetterToScrambledWord(charRemoved)
        console.log('charRemoved', charRemoved) 
    }

    public updateWord(){   
        setWord(this.userAnswer)
        if(this.userAnswer == this.answer.replaceAll(' ','')){
            console.log('ROUND COMPLETE')
            setTimeout(() => {
                if(this.round < this.numOfRounds-1){
                    this.round++;
                    this.generateRound()
                }
                else{
                    hideGame()
                    revealCelebration();
                }
            }, 1000);
        }
    }

    public triggerGameButton(trigger){
        if(trigger == 'restart'){
            this.generateRound();
        }
    }
}
   
