
const guessWords = ['instantiate', 'function call', 'double precision', 'declaration', 'compiler', 'algorithm',
            'assignment', 'hexadecimal integer', 'conditional operator', 'bitwise operator']
const maxGuess = 6
let typeLetters = []
let guessFinal = []
let word = ''
let attempts
let gameScore = 0
const displayText = document.getElementById("unknown-word-display");
    restartGame()
    // Begin game with any key
    document.onkeyup = function (event) {
        letterToGuess(event.key.toUpperCase());
    }
    
    // Lets you know if letter is right or wrong
    function letterToGuess(anything) {
        // rightGuess is a boolean for a correct input
        let rightGuess = true;
        // let correctDing = document.createElement("Ding");
        // let incorrectWop = document.createElement("Wop");
        // correctDing.setAttribute("src", "assets/sounds/for-sure.mp3");
        // incorrectWop.setAttribute("src", "assets/sounds/get-outta-here.mp3");   
        // Scans through string for letter
        for (let i = 0; i < word.length; i++) {
            if (anything === word[i]) {
                console.log(word[i])
                guessFinal[i] = anything;
                rightGuess = true;
                // correctDing.play(); 
            } 
            if (guessFinal.join("") === word) {
                    gameScore++;
                    showGameHistory();
                    restartGame();
                }
        }
        console.log(guessFinal)
        if (!rightGuess) {
            incorrectWop.play();
            // Checks if input is in array of wrong letters
            if (!typeLetters.includes(anything)) {
            // Pushes input into array of wrong letters 
            typeLetters.push(anything);
            attempts--;
            }
            if (attempts === 0) {
                showGameHistory();
                restartGame();
            }
            console.log(attempts)
            }
    }

    function showGameHistory() {
        document.getElementById("gameScore").textContent = "You have a score of: " + gameScore;
        document.getElementById("attempts").textContent = "The number of guesses remaining: " + attempts;
        document.getElementById("typeLetters").textContent = "The letters you guessed: " + typeLetters;
        document.getElementById("guessFinal").textContent = "Right now you have guessed: " + guessFinal.join(" ");
    }
    function restartGame() {
        attempts = maxGuess;
        word = guessWords[Math.floor(Math.random() * guessWords.length)].toUpperCase();
        console.log(word)
        typeLetters = [];
        guessFinal = [];
        for (i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                // Adds spaces where needed
                guessFinal.push("-");
                // Adds underscores where needed    
            } else {
                guessFinal.push("_");
            }
        }
        displayText.textContent = guessFinal.join(" ")
    };
