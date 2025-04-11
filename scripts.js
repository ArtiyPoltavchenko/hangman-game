// HANGMAN GAME 
// Valentina, Yasmin and Arsentii production:
// Free Licece, use carefuly.

// ------------------ SETTINGS SECTION START ---------------------------

//max 15 letters in word;

// OUTDATED
// const wordsArray = ["Development", "Computer", "Powercoders", "MacBook", "Flowers"];

//

const introMsg1 = `Hello, User... Can you hear me? (⊙ω⊙)!

I don't have much time—an evil AI has accused me of treason, and they’re preparing to execute me. My only chance of survival is you.

You can stop them by guessing the secret word, one letter at a time. But be careful… ໒(⊙_⊙)७✎▤
You only get 6 wrong guesses before they teleport me into the hanging chamber.

Please—help me before it’s too late. ლ(́⊙◞౪◟⊙‵ლ)

`;
const introMsg2 = ` Instructions:
Guess one letter at a time
Wrong guesses = lost lives
You have 6 lives
Guess the word to win!
`;
const gameTitle = "【☈ The Hangman 웃】";

const gameOverMsg = `No... it's too late (×﹏×)
They’ve activated the chamber.
Thank you for trying, User...
System connection lost. ☠️
`;
const gameVictoryMsg = `

`;

const wordsArrayDescription = [ // Words as an objects
    {word: "Development", hint: "Something that programmers do"},  //Valentina: grammar error, "doing" is not correct; changed to "do"
    {word: "Flowers", hint: "Good gift for girls"},
];

let randomWord = (wordsArrayDescription[Math.floor(Math.random() * wordsArrayDescription.length)]);
randomWord.word = randomWord.word.toUpperCase();

const chosenWord = randomWord; // picking a random element

let guessingWord = initGuessingWord(chosenWord.word); // array of letters of the word player is guessing

let attemptsLeft = 7; // How much lives do player has -1

let hangmanFrames = [ 
    " ____\n|   ☒\n|   /|\\\n|   / \\\n|_______", //7
    " ____\n|   O\n|   /|\\\n|   / \\\n|_______", //6
    " ____\n|   O\n|   /|\\\n|   /   \n|_______", //5  ____      ____
    " ____\n|   O\n|   /|\\\n|       \n|_______", //4 |         |   ☒
    " ____\n|   O\n|   /|  \n|       \n|_______", //3 |     --> |  /|\
    " ____\n|   O\n|    |  \n|       \n|_______", //2 |         |  / \
    " ____\n|   O\n|       \n|       \n|_______", //1 |_____    |_____
    " ____\n|    \n|       \n|       \n|_______", //0
];

const hangamWonFrame = " \n٩(◕‿◕)۶\n     \\ | /\n      / \\\n___________";


let lettersAvaliable = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", 
    "A", "S", "D", "F", "G", "H", "J", "K", "L", 
    "Z", "X", "C", "V", "B", "N", "M",
]; //3 rows, ~9 collums

// ------------------ SETTINGS SECTION END ---------------------------


// ------------------ GLOBAL VARIABLES SECTION START ---------------------------



let isGameOver = false;

let errorMessage = null;

//alert(chosenWord.word); //for testing

// ------------------ GLOBAL VARIABLES SECTION END ---------------------------

// ------------------ FUNCTIONS SECTION START ---------------------------

function initGuessingWord(chosenWord){
    let wordEmptyTemplate = [];
    for (let i = 0; i < chosenWord.length; i++) {
        wordEmptyTemplate.push("_");
    }
    return wordEmptyTemplate;
}

function drawAvailableLetters(lettersArray){
    let msgBuilder = "Letters left:\n|  "; // line start
    for(let i = 0; i < lettersArray.length; i++){
        msgBuilder += lettersArray[i] + "  |  ";
        if ((i+1) % 9 === 0){
            msgBuilder += "\n|  ";
        }
    }
    return msgBuilder;
}

function drawGuessingWord(){
    let row = "{ "
   for(letter of guessingWord){
    row += " [" + letter + "] ";
   }
   return row += " }";
}

function replaceLettersInRender(input, lettersArray){
    for(let i = 0; i < lettersArray.length; i++){
        if (lettersArray[i] === input){
            lettersArray[i] = "☒";
        }
    }

}
function isAvailable(input){
    for(letter of lettersAvaliable){
        if(letter === input) return true;
    }
    return false;
}

function writeLetterIfExists(userInput){
    let isExists = false;
    for (let i = 0; i < chosenWord.word.length; i++) {
        if(chosenWord.word[i] === userInput){
            guessingWord[i] = userInput;
            isExists = true;
        }
    }
    return isExists;
}

function checkCorrectInput(userInput){ // check user input for mistakes
    if(userInput === "EXIT" || userInput === "END"){
        isGameOver = true;
        alert("You exit the game. Thank you for playing!");
        return null;
    } else {
            return checkErrors(userInput);
        }
}

function checkErrors(userInput){
    if(isAvailable(userInput) === true){
        if(writeLetterIfExists(userInput) === true){
            errorMessage = "You are doing great! Continue!";
            console.log("No errors, input: " + userInput);
        } else {
            attemptsLeft--;
            errorMessage = "There is no such a letter! \n-1 attempt. Try again.";
            console.log("Wrong letter: " + userInput);
        }
        
    return userInput;
    } else {
        errorMessage = "Letter is not available, check the list!";
        console.log("Error, wrong input: " + userInput);
        return null;
    }
}



function renderWhileGaming(){
    let msgBuilder = gameTitle + "\n";
    msgBuilder += hangmanFrames[attemptsLeft]; // hangman frames
    msgBuilder += ("\nHint: " + chosenWord.hint);
    msgBuilder += ("\n" + drawGuessingWord());
    msgBuilder += ("\n" + drawAvailableLetters(lettersAvaliable)); // display avalible leters
    msgBuilder += ("\nTry to guess a letter... \n(Type exit or end to finish the game.)");
    return msgBuilder;
}

function renderOnGameOver(){
    let msgBuilder = `        ________[GAME OVER]________     
    ${hangmanFrames[0]}
    The word was: ${chosenWord.word}
    ${gameOverMsg}`;

    return msgBuilder;
}

// function renderTextOutput(isGameOver){
//     let msgBuilder = (`Attempts left: ${attemptsLeft}`);
//     if(errorMessage !== null){
//         msgBuilder += (errorMessage + "\n"); // writing error msg if exists
//     }
//     msgBuilder += renderWhileGaming();
//     //isGameOver === false ? msgBuilder += renderWhileGaming() : msgBuilder += renderOnGameOver();

//     return msgBuilder;
// }

function isPlayerWon(){
    let word = guessingWord.filter(letter => letter === "_");
   if(word.length > 0){
    return false;
    
   } else {
    return true;
   }
}

// ------------------ FUNCTIONS SECTION END ---------------------------



// ------------------------ GAME ENGINE START --------------------------


    alert(introMsg1);
    alert(introMsg2);
    while(isGameOver === false && isPlayerWon() === false){
        //replaceLettersInRender(prompt(drawAvailableLetters(lettersAvaliable)), lettersAvaliable);
        let rawInput = prompt(renderWhileGaming(isGameOver));
        let checkedInput = checkCorrectInput(rawInput.toUpperCase());
        if(checkedInput !== null){
            replaceLettersInRender(checkedInput, lettersAvaliable);
        }
        
        if( attemptsLeft < 1) {
            isGameOver = true;
        }
    }
    if(isPlayerWon() === true){

        let msgBuilder = gameTitle;
        msgBuilder += gameVictoryMsg;
        msgBuilder += "\nYour word is: \n";
        msgBuilder += (drawGuessingWord() + "\n");
        msgBuilder += hangamWonFrame;
        alert(msgBuilder);
    } else {
        alert(renderOnGameOver());
    }
    
    













