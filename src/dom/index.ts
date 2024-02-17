import { triggerButton, triggerInput, triggerLetter } from "../index";
// import image1 from "../assets/images/finleys_films/1.png";
//const image1 = new URL("../assets/images/finleys_films/1.png");
import gameInfo  from '../experience/utils/gameInfo.json';
import irlGameInfo  from '../experience/utils/irlGameInfo.json';
import scavengerInfo  from '../experience/utils/scavengerInfo.json';

const splash = <HTMLElement>document.querySelector('.splash')
const game_selection = <HTMLElement>document.querySelector('.game_selection')
const game_selection_games_div = <HTMLElement>document.querySelector('.game_selection_games div')
const game_selection_hand = <HTMLElement>document.querySelector('.game_selection_hand')
const game = <HTMLElement>document.querySelector('.game')
const game_main = <HTMLElement>document.querySelector('.game main')
const game_question = <HTMLElement>document.querySelector('.game_question')
const game_answer = <HTMLElement>document.querySelector('.game_answer')
const game_title = <HTMLElement>document.querySelector('.game_title')
const game_description = <HTMLElement>document.querySelector('.game_description')
const game_score = <HTMLElement>document.querySelector('.game_score')
const scavenger = <HTMLElement>document.querySelector('.scavenger')
const scavenger_clues = <HTMLElement>document.querySelector('.scavenger_clues')
const celebration = <HTMLElement>document.querySelector('.celebration')
const foundHeart = <HTMLElement>document.querySelector('.foundHeart')



const starsIcon = <HTMLElement>document.querySelector('.stars_icon')
const starsScore = <HTMLElement>document.querySelector('.stars_score')
const heartsIcon = <HTMLElement>document.querySelector('.hearts_icon')
const heartsScore = <HTMLElement>document.querySelector('.hearts_score')

const game_restartButton = <HTMLElement>document.querySelector('.game_restartButton')
const game_tick = <HTMLElement>document.querySelector('.game_tick')
let game_keyboard = <HTMLButtonElement>document.querySelector('.game_keyboard');

let scores = [];
let irlScores = [];
let buttonTexts = [];
let irlButtonTexts = [];

let keyboardLetters = [['q','w','e','r','t','y','u','i','o','p'],['a','s','d','f','g','h','j','k','l'],['z','x','c','v','b','n','m','⌫']];

let heartIcon = require("../assets/images/heartIcon.png");
let lockIcon = require("../assets/images/lockIcon.png");
let heartOutline = require("../assets/images/heartIconOutline.png");

let totalScore = 0;
let numOfQuestions = 0;
let totalHearts = 0;

let game_selection_button_images = [
    require("../assets/images/letters.png"), 
    require("../assets/images/emoji.png"),
    require("../assets/images/dog.png"),
    require("../assets/images/empties.png"), 
    require("../assets/images/faces.png")
]

let game_selection_irl_button_images = [
    require("../assets/images/bra.png"), 
    require("../assets/images/microphone.png"),
    require("../assets/images/rings.png"),
]

let finley_film_images = [
require("../assets/images/finleys_films/0.png"), 
require("../assets/images/finleys_films/1.png"), 
require("../assets/images/finleys_films/2.png"),
require("../assets/images/finleys_films/3.png"),
require("../assets/images/finleys_films/4.png"),
require("../assets/images/finleys_films/5.png"),
require("../assets/images/finleys_films/6.png"),
require("../assets/images/finleys_films/7.png"),
require("../assets/images/finleys_films/8.png")]

let face_merge_images = [
require("../assets/images/face_merge/0.png"), 
require("../assets/images/face_merge/1.png"), 
require("../assets/images/face_merge/2.png"), 
require("../assets/images/face_merge/3.png"),
require("../assets/images/face_merge/4.png"),
require("../assets/images/face_merge/5.png"),
require("../assets/images/face_merge/6.png"),
require("../assets/images/face_merge/7.png"),
require("../assets/images/face_merge/8.png"),
require("../assets/images/face_merge/9.png"),
require("../assets/images/face_merge/10.png"),
require("../assets/images/face_merge/11.png"),
require("../assets/images/face_merge/12.png"),
require("../assets/images/face_merge/13.png"),
require("../assets/images/face_merge/14.png"),
require("../assets/images/face_merge/15.png")]

let irl_images = [
    require("../assets/images/braPhoto.png"), 
    require("https://www.partyrama.co.uk/wp-content/plugins/partyrama-ecommerce-pro/includes/pro-images/prod-img/default/harry-styles-dungarees-lifesize-cardboard-cutout-185cm-product-image.jpg"),
    require("../assets/images/prossecoHeadband.png")
]


let letters = [];
let tiles = [];
let words = [];
let qWords = [];
let clues = [];
let scavengerImgs = [];

export function revealSplash(){
    console.log('hide Splash')
    splash.style.display = 'flex';
    document.body.style.backgroundColor = '#c8e3eb';
}

export function init(){
    initGameSelection();
    initScavenger();
    createKeyboard();
}

export function hideSplash(){
    console.log('hide Splash')
    splash.style.display = 'none';
}

export function revealGameSelection(){
    game_selection.style.display = 'flex';   
    document.body.style.backgroundColor = '#c8e3eb'
    updateStars();
    updateHearts();
}

game_selection_games_div.addEventListener("scroll", (event) => {
    game_selection_hand.style.display ='none';
});

export function hideGameSelection(){
    game_selection.style.display = 'none';
}

export function revealGame() {
    game.style.display = 'flex';
    document.body.style.backgroundColor = '#68a6c5';
}

export function hideGame() {
    game.style.display = 'none';
}


export function setGame(game) {

    if(game == 'irl'){
        game_restartButton.style.display = 'none';
        game_description.style.fontSize = '8vw';
        game_description.style.fontSize = '8vw';
        game_answer.style.display = 'none';
    } 
    else{
        game_restartButton.style.display = 'flex';
        game_answer.style.display = 'flex';
        game_description.style.fontSize = '5vw';
    }
}

export function createIrl(name){
    clearGame();
    let image = document.createElement('img');
    image.src = name == 'Bra Pong' ?  irl_images[0] : name == 'Style Harry' ? irl_images[1] : irl_images[2]
    game_question.append(image);
}


export function setGameTitle(str) {
    game_title.innerHTML = str;     
}

export function setGameDescription(str) {
    game_description.innerHTML = str;     
}
export function setGameScore(str) {
    game_score.innerHTML = str;     
}

export function setWord(word : string, correctWord : string){
    console.log(word);
    tiles.forEach((tile,i) => {
        if(i < word.length){
            tile.style.background = 'linear-gradient(#fff0bd, #d0bf88)';
            tile.innerHTML = word.charAt(i);
            tile.style.color = word.charAt(i) == correctWord.charAt(i) ? 'green' :  "linear-gradient(#f0f0f0, #b0b0b0)";
        }
        else{
            tile.style.background =  'linear-gradient(#f0f0f0, #b0b0b0)';
            tile.innerHTML = '';
        }
    });
}

export function addLetterToScrambledWord(charRemoved : string){
    let letterAdded = false;
    letters.forEach((letter,i) => {
        if(letter.classList.contains('letterSelect') && letter.innerHTML == charRemoved && !letterAdded){
            letter.classList.remove('letterSelect')
            letterAdded = true;
        }
    })
}

export function selectScrambledLetter(char){
    return new Promise<void>((resolve, reject) => {
        let letterAdded = false;
        letters.forEach((letter,i) => {
            if(!letter.classList.contains('letterSelect') && letter.innerHTML == char && !letterAdded){
                letter.classList.add('letterSelect')
                letterAdded = true;  
                resolve();
            }
        })
    });
}

export function setWordGreen(){
    tiles.forEach((tile,i) => {
        tile.style.background = 'linear-gradient(#ffffff, #00ff00)';
    });
}

export function clearGame(){
    game_tick.style.display =  'none';
    game_restartButton.style.display = 'flex';

    while (game_answer.firstChild) {
        game_answer.removeChild(game_answer.lastChild);
      }
      while (game_question.firstChild) {
        game_question.removeChild(game_question.lastChild);
      }
      letters = [];
      tiles = [];   
      words = [];
      qWords = []
}


export function createGameRound(game: string, question : string, round: number, answer : string) {
    clearGame();

    let word  = document.createElement('div');
    words.push(word);
    word.classList.add('game_word');
    game_answer.append(word)


    for(let i = 0; i < answer.length; i++){
        if(answer.charAt(i) == ' '){
            word = document.createElement('div');
            words.push(word);
            game_answer.append(word)
            word.classList.add('game_word');

        }
        else{
            let empty = document.createElement('button');
            words[words.length-1].append(empty)
            tiles.push(empty)

            if(game == 'fill_the_blanks'){
                if(question.charAt(i) != '_'){
                    empty.innerHTML = question.charAt(i);
                }
            }
        }
    }

    game_answer.append(word);

    if(game == 'scrambled_words' || game == 'fill_the_blanks'){
        let questionStr = game == 'scrambled_words' ? question : 'aeiou';
        console.log(questionStr)


        let qWord  = document.createElement('div');
        qWords.push(qWord);
        qWord.classList.add('game_word');
        game_question.append(qWord)

        for(let i = 0; i < questionStr.length; i++){
            if(questionStr.charAt(i) == ' '){
                qWord  = document.createElement('div');
                qWords.push(qWord);
                qWord.classList.add('game_word');
                game_question.append(qWord);
            }
            else{
                let letter = document.createElement('button');
                letters.push(letter);
                letter.innerHTML = questionStr.charAt(i);
                qWord.append(letter);
            }
        }
   
        letters.forEach((letter,i) => {
            letter.addEventListener('click', () =>{
                if(!letter.classList.contains('letterSelect')){
                    letter.classList.add('letterSelect')
                    triggerLetter(letter.innerHTML)
                }
            })
        });
        game_keyboard.style.display = 'none';
    }
    else{
        game_keyboard.style.display = 'flex';
        if(game == 'emoji_game'){
            console.log('create emoji game', question)
            game_question.innerHTML = question;
        }
        else if(game == 'finleys_films' ||game == 'face_merge'){
            let game_image = document.createElement('img');
            game_question.append(game_image)
            game_image.src = game == 'finleys_films' ? finley_film_images[round] : face_merge_images[round] ;
        }
    }
}

export function roundComplete(){
    game_tick.style.display =  'flex';
    game_restartButton.style.display = 'none';
    game_keyboard.style.display  = 'none';
}

export function revealCelebration(){
    celebration.style.display = 'flex';
    document.body.style.backgroundColor = 'white';
}

export function hideCelebration(){
    celebration.style.display = 'none'
}

export function revealFoundHeart(){
    foundHeart.style.display = 'flex';
    document.body.style.backgroundColor = 'white';
}

export function hideFoundHeart(){
    foundHeart.style.display = 'none'
}

export function createKeyboard(){
    keyboardLetters.forEach(row => {
        let div = document.createElement('div');
        game_keyboard.append(div);
        row.forEach(letter => {
            let button = document.createElement('button');
            button.innerHTML = letter;
            div.append(button)
            button.addEventListener('click', () =>{
                console.log('letter', letter)
                triggerInput(letter);
            })
        })
    });
}

export function revealScavenger(){
    scavenger.style.display = 'flex';
    document.body.style.backgroundColor = '#c8e3eb';
}

export function hideScavenger(){
    scavenger.style.display = 'none';
}

export function initGameSelection(){
    Object.entries(gameInfo).forEach(([key, value], index) => {
        createGameSelectionButton(value, index, key, 'website')
    });

    Object.entries(irlGameInfo).forEach(([key, value], index) => {
        createGameSelectionButton(value, index, key, 'irl')
    });
}
function createGameSelectionButton(value, index, key, game){
    let button  = document.createElement('button');
 
    game_selection_games_div.append(button);

    let div = document.createElement('div');
    button.append(div);

    let img = document.createElement('img');
    img.src =  game == 'irl' ? game_selection_irl_button_images[index] : game_selection_button_images[index];
    div.append(img);

    let p  = document.createElement('p');
    p.innerHTML =  value.title;
    button.append(p);

    let p2  = document.createElement('p2');
    if(game == 'irl'){
        irlScores.push(p2)
    }
    else{
        scores.push(p2);
    }

    let score = localStorage.getItem(key);
    if(score == null) score = '0';
    p2.innerHTML =  score +'/'+ 10;

    button.append(p2);
  

    let p3  = document.createElement('p3');
    p3.innerHTML = 'Play';
    button.append(p3);
    if(game == 'irl'){
        irlButtonTexts.push(p3)
    }
    else{
        buttonTexts.push(p3);
    }

    button.addEventListener('click', () =>{
        hideGameSelection(); 
        triggerButton(key, game);
    })

}

export function updateStars() {
    totalScore = 0;
    numOfQuestions = 0; 

    Object.entries(gameInfo).forEach(([key, value], index) => {
        let score = localStorage.getItem(key);
        if(score == null) score = '0';
        numOfQuestions +=  Object.keys(value.rounds).length;
        totalScore += Number(score); 

        scores[index].innerHTML =   '★'+score +'/'+ Object.keys(value.rounds).length;
        if(Object.keys(value.rounds).length == Number(score)){
            buttonTexts[index].innerHTML = 'Complete';
            buttonTexts[index].style.backgroundColor = '#c8e3eb';
            buttonTexts[index].style.border = '2px solid white';
            buttonTexts[index].parentElement.style.pointerEvents = 'none';
        }
        else{
            buttonTexts[index].innerHTML = 'Play';
            buttonTexts[index].style.backgrounColor = '#68a6c5';
        }        

    })

    Object.entries(irlGameInfo).forEach(([key, value], index) => {
        let score = localStorage.getItem(key);
        if(score == null) score = '0';
        numOfQuestions += 10;
        totalScore += Number(score); 
        irlScores[index].innerHTML =   '★'+score +'/10'; 
        irlButtonTexts[index].innerHTML = 0 == Number(score) ? 'Complete' : 'Play';

        if(10 == Number(score)){
            irlButtonTexts[index].innerHTML = 'Complete';
            irlButtonTexts[index].style.backgroundColor = '#c8e3eb';
            irlButtonTexts[index].style.border = '2px solid white';
            irlButtonTexts[index].parentElement.style.pointerEvents = 'none';
        }
        else{
            irlButtonTexts[index].innerHTML = 'Play';
            irlButtonTexts[index].style.backgrounColor = '#68a6c5';
        }        
    });

    starsIcon.innerHTML = '★<br/>'+totalScore.toString()  + ' / ' + numOfQuestions;
    let percentage =  (1 - (totalScore/numOfQuestions))*100;
    console.log(percentage); 
    //starsScore.style.background= 'linear-gradient( #ddd '+(percentage-1)+'%,  #68a6c5 '+percentage+'%, #fff0bd '+(percentage+1)+'%, #f1c16a 100%)';
    starsScore.style.background= 'linear-gradient( #ddd '+(percentage-1)+'%,  #68a6c5 '+percentage+'%, #c8e3eb '+(percentage+1)+'%, #ffffff 100%)';

}

export function updateHearts() {
    totalHearts = 0;
    Object.entries(scavengerInfo).forEach(([key, value], index) => {
        let heart = localStorage.getItem(value.heartToken);
        if(heart != null){
            totalHearts++; 
        }
    })
    heartsIcon.innerHTML = '♥<br/>'+totalHearts.toString()  + ' / ' + Object.keys(scavengerInfo).length;
    let percentage = (1-(totalHearts/Object.keys(scavengerInfo).length))*100
    heartsScore.style.background= 'linear-gradient( #ddd '+(percentage-1)+'%,  #68a6c5 '+percentage+'%, #c8e3eb '+(percentage+1)+'%, #ffffff 100%)';
}

export function initScavenger(){
    Object.entries(scavengerInfo).forEach(([key, value], index) => {
        let clue = document.createElement('div');
        scavenger_clues.append(clue);
        let clueText = document.createElement('p');
        clue.append(clueText);
        clues.push(clueText)
        let heart = document.createElement('img');
        heart.src = heartIcon;

        scavengerImgs.push(heart);
        clue.append(heart);

    });
}

export function updateScavengeScore() { 
    Object.entries(scavengerInfo).forEach(([key, value], index) => {

        clues[index].innerHTML = totalScore > (index+1)*5 ? value.clue  :   '★ '+(index+1)*5 + '/100 to unlock';

        let heartFound = localStorage.getItem(value.heartToken);
    
        // scavengerImgs[index].style.filter = heartFound == null ? 'grayscale(1)' : 'grayscale(0)';

      
        scavengerImgs[index].src =  totalScore > (index+1)*5 ?  heartFound == null ? heartOutline : heartIcon:  lockIcon ;
        scavengerImgs[index].style.opacity = heartFound != null ? '1' : '0.4';
    });
}