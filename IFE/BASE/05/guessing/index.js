// random number
var randomNumber = Math.floor(Math.random()*100)+1;

// get dom
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHi');
var guessNumber = document.querySelector('.guessNumber');
var guessSubmit = document.querySelector('.guessSubmit');

// init game
var guessCount = 1;
var resetButton;
guessNumber.focus();

// check Guess
function checkGuess() {
  var userGuess = Number(guessNumber.value);
  if(guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';
  if(guessCount === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = '';
    setGameOver();
  } else if (guessCount === 10 ) {
    lastResult.textContent = '!!!GAME OVER!!!';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHigh.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHigh.textContent = 'Last guess was too high!';
    }
  }
  
  
  
  guessCount++;
  guessNumber.value = '';
  guessNumber.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessNumber.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessNumber.disabled = false;
  guessSubmit.disabled = false;
  guessNumber.value = '';
  guessNumber.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
