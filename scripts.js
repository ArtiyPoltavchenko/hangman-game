// HANGMAN GAME 
// Valentina, Yasmin and Arsentii production:
// Free Licece, use carefuly.

// words array

// randomizer to pick the word

// user's HP (tries left)

// guessed letters array

// guessed letters to render

// func: is there letter in the word?

const wordsArray = ["Development", "Computer", "Powercoders", "MacBook", "Flowers"];

let chosenWord;

let attemptsLeft = 6;

let isGameOver = false;

let lettersNotGuessed = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
    "A", "S", "D", "F", "G", "H", "J", "K", "L", 
    "Z", "X", "C", "V", "B", "N", "M",
]; //3 rows, 9 collums

function drawLettersLeft(lettersArray){
    let msgBuilder = "Letters left:\n|  "; // line start
    for(let i = 0; i < lettersArray.length; i++){
        msgBuilder += lettersArray[i] + "  |  ";
        if ((i+1) % 9 === 0){
            msgBuilder += "\n|  ";
        }
    }
    return msgBuilder;
}

function replaceLetterWithEmpty(input, lettersArray){
    for(let i = 0; i < lettersArray.length; i++){
        if (lettersArray[i] === input){
            lettersArray[i] = "☒";
            console.log(lettersArray[i]);
        }
    }
}

function checkCorrectInput(userInput){ // check user input for mistakes
    
}

    //alert(drawLettersLeft(lettersNotGuessed));

    while(isGameOver === false){
        replaceLetterWithEmpty(prompt(drawLettersLeft(lettersNotGuessed)), lettersNotGuessed);
        attemptsLeft--;

        if( attemptsLeft < 1) {
            isGameOver = true;
        }
    }
    alert("GameOver");
    













