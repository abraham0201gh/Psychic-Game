
var randomLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerGuess = "";
var correct = 0;
var wrong = 0;
var remaining = 9;
var attempted = [];


//computer selects letter
window.onload = function() {
    var randomSelected = randomLetters[Math.floor(Math.random() * randomLetters.length)];

//player selection recorded
    document.onkeyup = function(event) {
        playerGuess = event.key;  
        attempted.push(playerGuess);
        document.getElementById("attempted").innerHTML = "Your Guesses So Far: " + attempted;

//Restart Game
var restartGame = function () {
    randomSelected = randomLetters[Math.floor(Math.random() * randomLetters.length)];
    remaining = 9; attempted = []; 
    document.getElementById("remaining").innerHTML = "Guesses Left: " + remaining;
    document.getElementById("attempted").innerHTML = "Your Guesses So Far: " + attempted;
}
        //conditionals after player guess
        if (playerGuess === randomSelected) {
            correct++;
            document.getElementById("correct").innerHTML = "Wins: " + correct; 
            restartGame();
        }
        else {
            remaining--;
            document.getElementById("remaining").innerHTML = "Guesses Left: " + remaining;            
        }

        if (remaining === 0) {
            // alert ("Game Over");  --- optional for additional user interactivity 
            wrong++;
            document.getElementById("wrong").innerHTML = "Losses: " + wrong;
            restartGame(); 
        }
    }
}
