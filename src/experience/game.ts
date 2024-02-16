import {  addLetterToScrambledWord, createGameRound,  createIrl,  hideGame, revealCelebration, roundComplete, selectScrambledLetter, setGame, setGameDescription, setGameScore, setGameTitle, setWord } from "../dom/index";
import gameInfo  from './utils/gameInfo.json'
import irlInfo  from './utils/irlGameInfo.json'


export default class Game {
    private round : number;
    private gameName : string
    private question : string;
    private answer : string;
    private numOfRounds : number;
    private userAnswer : string
    private answerLength : number;
    

    constructor(gameName, game) {
        this.gameName = gameName
        if(game != 'irl') this.numOfRounds =  Object.keys(gameInfo[this.gameName].rounds).length;
        this.initGame(game);
    }

    public initGame(game){
        console.log('init game', this.gameName)
        this.round = Number(localStorage.getItem(this.gameName));
        if( this.round == null) this.round = 0;
        let info = game == 'irl' ? irlInfo : gameInfo;
        console.log(info)
        setGameTitle(info[this.gameName].title);
        setGameDescription(info[this.gameName].description);
        setGame(game)
        if(game =='irl'){
            createIrl(info[this.gameName].title)
        }
        else{
            this.generateRound()
        }

    }

    public generateRound() {
        this.question = gameInfo[this.gameName].rounds[this.round].question;
        this.answer = gameInfo[this.gameName].rounds[this.round].answer;
        this.answerLength = this.answer.replaceAll(' ', '').length;

        setGameScore(this.round +"/"+ this.numOfRounds)
        createGameRound(this.gameName, this.question, this.round, this.answer);
        this.userAnswer = this.gameName == 'fill_the_blanks' ? this.question.replaceAll(' ', '') : '';
    }

    public triggerInput(letter){
        console.log(letter)
        if(letter == '⌫'){
            if(this.gameName == 'scrambled_words'){
                this.triggerBackspace();
            }
            this.userAnswer = this.userAnswer.substring(0, this.userAnswer.length - 1);
            this.updateWord();
        }

        else if(letter != null){
            if(letter.match(/[a-z]/i)){
                if(this.gameName == 'scrambled_words'){
                    let letterSelected = false
                    for(let i = 0; i < this.question.length; i++){
                        if(this.question.charAt(i) == letter && !letterSelected){
                            this.question.replace(letter,'');
                            selectScrambledLetter(letter).then(() =>{
                                this.userAnswer = this.userAnswer + letter;
                                this.updateWord();
                            })
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
        console.log('triggerletter', letter, this.gameName)
        this.userAnswer = this.gameName == 'scrambled_words' ? this.userAnswer + letter : this.userAnswer.replaceAll('_', letter);
        console.log('here', this.userAnswer)
        this.updateWord();   
    }

    public triggerBackspace(){
        let charRemoved = this.userAnswer.charAt(this.userAnswer.length-1);
        addLetterToScrambledWord(charRemoved)
        console.log('charRemoved', charRemoved) 
    }

    public updateWord(){   
        setWord(this.userAnswer, this.answer.replaceAll(' ',''))
        if(this.userAnswer == this.answer.replaceAll(' ','')){
            console.log('ROUND COMPLETE')
            roundComplete()
            setTimeout(() => {
                if(this.round < this.numOfRounds-1){
                    this.round++;
                    console.log(this.gameName, this.round)
                    localStorage.setItem(this.gameName, ''+this.round);
                    this.generateRound()
                }
                else{
                    hideGame()
                    revealCelebration();
                }
            }, 2100);
        }
    }

    public triggerGameButton(trigger){
        if(trigger == 'restart'){
            console.log('restart')
            this.generateRound();
        }
    }
}
   
