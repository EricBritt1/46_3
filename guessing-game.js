function guessingGame() {
    let randomNumber = Math.floor(Math.random() * 100)
    let win = false;
    let guessCount = 0;
    return function guessingGame(guess) {
        if(!win) { 
            guessCount += 1;
            if(guess > randomNumber) return `${guess} is too high!`;
            if(guess < randomNumber) return `${guess} is too low!`;
            if(guess === randomNumber) { 
                win = true;
                return `You win! You found ${guess} in ${guessCount} guesses.`
            }
        } if(win) {
            return 'The game is over, you already won!'
        }
    }
}

module.exports = { guessingGame };
