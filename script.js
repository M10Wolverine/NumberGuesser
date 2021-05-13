"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Reset game
document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?"; //originally ?
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

//Guess button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess || guess < 1 || guess > 20) {
    //Invalid input
    document.querySelector(".message").textContent = "No / Invalid Number!";
  } else if (guess === secretNum) {
    //Correct Guess
    document.querySelector(".message").textContent =
      "Correct Number! Congratulations!";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNum) { //Wrong guess
    document.querySelector(".message").textContent =
      guess < secretNum ? "Too Low!" : "Too High!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lose!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
