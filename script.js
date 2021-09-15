const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
const totalScore = [0, 0];
let currentScore = 0;
let activePlayer = 0;
dice.classList.add("hidden");

function Switch() {
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.remove("player-active");
  currentScore = 0;
  document.querySelector(`#current-${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document
    .querySelector(`.player-${activePlayer}`)
    .classList.add("player-active");
}
function reset() {
  let temp = document.querySelectorAll(".score , .current-score");
  console.log(temp);
  temp.forEach(function (e) {
    e.textContent = "0";
  });
}
roll.addEventListener("click", function () {
  num = Math.ceil(Math.random() * 5);
  dice.classList.remove("hidden");
  dice.src = `./img/dice-${num}.png`;

  if (num !== 1) {
    currentScore += num;
    document.querySelector(`#current-${activePlayer}`).textContent =
      currentScore;
  } else {
    Switch();
  }
});
hold.addEventListener("click", function () {
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score-${activePlayer}`).textContent =
    totalScore[activePlayer];
  Switch();
});
newGame.addEventListener("click", function () {
  reset();
});
