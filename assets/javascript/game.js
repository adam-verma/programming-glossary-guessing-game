
const guessWords = ['instantiate', 'function call', 'double precision', 'declaration', 'compiler', 'algorithm',
            'assignment', 'hexadecimal integer', 'conditional operator', 'bitwise operator']
const maxGuess = 6
let typeLetters = []
let guessFinal = []
let word = []
let attempts
let gameScore = 0
const displayText = document.getElementById("unknown-word-display");
    restartGame()
    // Begin game with any key
    document.onkeyup = function (event) {
    if (displayText.textContent = event.key) {
        letterToGuess(event.key);
    };
};

    // Lets you know if letter is right or wrong
    function letterToGuess(anything) {
        let rightGuess = true;
        // let correctDing = document.createElement("Ding");
        // let incorrectWop = document.createElement("Wop");
        // correctDing.setAttribute("src", "");
        // incorrectWop.setAttribute("src", "");

        // Scans through string for letter
        for (i = 0; i < word.length; i++) {
            if (anything === word[i]) {
                guessFinal[i] = anything;
                rightGuess = true;
                // correctDing.play(); 
                if (guessFinal.join("") === word) {
                    gameScore++;
                    // showGameHistory();
                    restartGame();
                }
            } 
        }
        if (!rightGuess) {
            // incorrectWop.play();
            // Sends wrong letters to new list 
            if (!typeLetters.includes(anything)) {
            typeLetters.push(anything);
            attempts--;
            }
            if (attempts === 0) {
                // showGameHistory();
                restartGame();
            }
            console.log(attempts)
            }
    }

    // function showGameHistory() {
    //     document.getElementById("gameScore").textContent = "You have a score of: " + gameScore;
    //     document.getElementById("attempts").textContent = "The number of guesses remaining: " + attempts;
    //     document.getElementById("typeLetters").textContent = "The letters you guessed: " + typeLetters;
    //     document.getElementById("guessFinal").textContent = "Right now you have guessed: " + guessFinal.join(" ");
    // }

    function restartGame() {
        attempts = maxGuess;
        word = guessWords[Math.floor(Math.random() * guessWords.length)].toUpperCase();
        console.log(word);
        typeLetters = [];
        guessFinal = [];
        for (i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                // Adds spaces where needed
                guessFinal.push(" ");
                // Adds underscores where needed    
            } else {
                guessFinal.push("_");
            }
        }
        
    }

