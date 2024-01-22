import { triggerInput, triggerLetter } from "../index";
// import image1 from "../assets/images/finleys_films/1.png";
//const image1 = new URL("../assets/images/finleys_films/1.png");

const splash = <HTMLElement>document.querySelector('.splash')
const game_selection = <HTMLElement>document.querySelector('.game_selection')
const game = <HTMLElement>document.querySelector('.game')
const game_question = <HTMLElement>document.querySelector('.game_question')
const game_answer = <HTMLElement>document.querySelector('.game_answer')
const game_title = <HTMLElement>document.querySelector('.game_title')
const game_description = <HTMLElement>document.querySelector('.game_description')
const game_score = <HTMLElement>document.querySelector('.game_score')
const celebration = <HTMLElement>document.querySelector('.celebration')
let game_input : HTMLInputElement;
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

let letters = [];
let tiles = [];
let words = [];

export function hideSplash(){
    console.log('hide Splash')
    splash.style.display = 'none';
}

export function revealGameSelection(){
    game_selection.style.display = 'flex';
}

export function hideGameSelection(){
    game_selection.style.display = 'none';
}

export function revealGame() {
    game.style.display = 'flex';
}

export function hideGame() {
    game.style.display = 'none';
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



export function setWord(word : string){
    console.log(word);
    game_input.value = word;
    tiles.forEach((tile,i) => {
        if(i < word.length){
            tile.style.background = 'linear-gradient(#fff0bd, #d0bf88)';
            tile.innerHTML = word.charAt(i);
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
    let letterAdded = false;
    letters.forEach((letter,i) => {
        if(!letter.classList.contains('letterSelect') && letter.innerHTML == char && !letterAdded){
            letter.classList.add('letterSelect')
            letterAdded = true;  
        }
    })
}

export function setWordGreen(){
    tiles.forEach((tile,i) => {
        tile.style.background = 'linear-gradient(#ffffff, #00ff00)';
    });
}



// fill the blanks


// export function createFillTheBlanksRound(str) {
//     clearGame();
//     console.log(createFillTheBlanksRound)

//     let vowels =  ['a','e','i','o','u'];

//     vowels.forEach(vowel => {
//         let letter = document.createElement('button');
//         letters.push(letter)
//         letter.innerHTML = vowel;
//         game_question.append(letter)
//     });

//     for(let i = 0; i < str.length; i++){
//         let empty = document.createElement('button');
//         tiles.push(empty)
//         game_answer.append(empty)
//     }
//     letters.forEach((letter,i) => {
//         letter.addEventListener('click', () =>{
//             console.log('letter');
//             triggerLetter(letter.innerHTML)
//         })
//     });
// }


export function clearGame(){
    while (game_answer.firstChild) {
        game_answer.removeChild(game_answer.lastChild);
      }
      while (game_question.firstChild) {
        game_question.removeChild(game_question.lastChild);
      }
      letters = [];
      tiles = [];   
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
        }
    }

    game_answer.append(word)

    let game_inputGroup = document.createElement('div');
    game_inputGroup.classList.add('inputGroup')
    game_answer.append(game_inputGroup)


    game_input = document.createElement('input');
    game_input.maxLength = answer.replaceAll(' ','').length;
    game_inputGroup.append(game_input)


    game_input.addEventListener("input", (event) => {
        triggerInput(event);
    });


    if(game == 'scrambled_words' || game == 'fill_the_blanks'){
        let questionStr = game == 'scrambled_words' ? question : 'aeiou';
        console.log(questionStr)
        for(let i = 0; i < questionStr.length; i++){
            let letter = document.createElement('button');
            letters.push(letter)
            letter.innerHTML = questionStr.charAt(i);
            game_question.append(letter);
        }

        letters.forEach((letter,i) => {
            console.log('letter',letter)
            letter.addEventListener('click', () =>{
                if(!letter.classList.contains('letterSelect')){
                    console.log('letter', letter.innerHTML);
                    letter.classList.add('letterSelect')
                    triggerLetter(letter.innerHTML)
                }
            })
        });
    }
    else if(game == 'emoji_game'){
        console.log('create emoji game', question)
        game_question.innerHTML = question;
    }
    else if(game == 'finleys_films' ||game == 'face_merge'){
        let game_image = document.createElement('img');
        game_question.append(game_image)
        game_image.src = game == 'finleys_films' ? finley_film_images[round] : face_merge_images[round] ;
    }
}

export function revealCelebration(){
    celebration.style.display = 'flex'
}


export function hideCelebration(){
    celebration.style.display = 'none'
}