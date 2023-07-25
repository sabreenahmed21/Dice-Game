'use strict';


const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnDice = document.querySelector('.btn-dice');
const btnHold = document.querySelector('.btn-hold');
const current1 = document.getElementById('current-1');
const current2 = document.getElementById('current-2');
const player1 = document.querySelector('.Player-1');
const player2 = document.querySelector('.Player-2');



let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [ ,0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;

  score1.textContent = 0;
  score2.textContent = 0;

  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  diceEl.classList.add('hidden');
  player1.classList.remove('player-wanner');
  player2.classList.remove('player-wanner');
  player1.classList.remove('player-active');
  player2.classList.remove('player-active');
}
init();

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 2: 1;
  player1.classList.toggle('Player-active');
  player2.classList.toggle('Player-active');
}

btnDice.addEventListener('click', function ( ) {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice${dice}.jpg`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer ();
    }
  }
});


btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 50) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.Player-${activePlayer}`).classList.add('player-wanner');
      document.querySelector(`.Player-${activePlayer}`).classList.remove('player-active');
    } else {
      switchPlayer ();
    }
  }
})

btnNew.addEventListener('click', init);










































