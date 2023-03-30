'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  }
  // when player wins!
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct';
    displayMessage('🎉Correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '5em';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // instead of high and low
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      // guess > secretNumber ? 'Too high!' : 'Too Low!';
      score--; /*score=score-1*/
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lose the game!';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // when number is high!

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--; /*score=score-1*/
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lose the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
  //   // when number is low!
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low!';
  //       score--; /*score=score-1*/
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lose the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '' /* or  null*/;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '20%';
});
