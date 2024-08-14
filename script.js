'use strict';

const wire1 = document.querySelector('.wire1');
const wire2 = document.querySelector('.wire2');
const wire3 = document.querySelector('.wire3');
const wire4 = document.querySelector('.wire4');
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    wire1.classList.add('active');
    wire2.classList.add('active');
    wire3.classList.add('active');
    wire4.classList.add('active');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      wire1.classList.remove('active');
      wire3.classList.add('active');
      wire4.classList.add('active');
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      wire3.classList.remove('active');
      wire4.classList.remove('active');
      wire1.classList.add('active');
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.restart').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  wire1.classList.remove('active');
  wire2.classList.remove('active');
  wire3.classList.remove('active');
  wire4.classList.remove('active');
});
