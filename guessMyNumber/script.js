'use strict';

/* GUESS MY NUMBER

GAME LOGIC:

Generate a random number (ranNum)
Ask for the input of the player (guessNum)
Check whether both previous const are equal:

while(score > 0) {
if(equal): 
  Score remains =.
  .message = "🎉Correct Number!"
  h1 changes to "You win!"
  CSS color-background = green

if(ranNum > guessNum):
  score - 1.
  .message = "Too low."
  
if(ranNum < guessNum):
  score - 1.
  .message = "Too high."
}
*/

/*Generate a random number between 1 and 20.*/
let ranNum = Math.floor(Math.random() * 20) + 1;
/*document.querySelector('.number').textContent = ranNum;*/
console.log(ranNum);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);

  /*Game conditions*/
  /*When no inputs*/
  if (!guessNum) {
    document.querySelector('.message').textContent = 'No number.';
  } else if (ranNum === guessNum) {
    /*High score implementation*/
    if (score > highScore) {
      highScore = score;
    } else {
      highScore = highScore;
    }
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('.number').textContent = ranNum;
    document.querySelector('.message').textContent = '🎉Correct Number!';
    document.querySelector('h1').textContent = '👏You win!';
    document.getElementById('body').style.backgroundColor = 'green';
  } else if (ranNum !== guessNum) {
  /*
  REFACTORED CODE
  Instead of two else if statements with repeated code, only one condition was used (!==) with a ternary operator.
  */
    if (score > 1) {
      document.querySelector('.message').textContent =
        ranNum > guessNum
          ? '📉Too low. Try a higher number.'
          : '📈Too high. Try a lower number.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🧨You ran out of chances.';
      document.querySelector('h1').textContent = 'You lose!';
      document.getElementById('body').style.backgroundColor = 'red';
    }
  }
});

/*
REPLACED CODE
When guess is too low
  } else if (ranNum > guessNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📉Too low. Try a higher number.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🧨You ran out of chances.';
      document.querySelector('h1').textContent = 'You lose!';
      document.getElementById('body').style.backgroundColor = 'red';
    }

    When guess is too high
  } else if (ranNum < guessNum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '📈Too high. Try a lower number.';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🧨You ran out of chances.';
      document.querySelector('h1').textContent = 'You lose!';
      document.getElementById('body').style.backgroundColor = 'red';
    }
  }
});
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  ranNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.guess').value = '';
  document.getElementById('body').style.backgroundColor = '#222';
  console.log(ranNum);
});
