"use strict";

//Game variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//DOM elements
const domMsg = document.querySelector(".message");
const domScore = document.querySelector(".score");
const domNum = document.querySelector(".number");
const domBody = document.querySelector("body");
const domGuess = document.querySelector(".guess");
const domHighScore = document.querySelector(".highscore");

function setMessage(msg) {
  domMsg.textContent = msg;
}

//Play again button
document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setMessage("Start guessing...");
  domScore.textContent = 20;
  domNum.textContent = "?";
  domGuess.value = "";
  domBody.style.backgroundColor = "#222";
  domNum.style.width = "15rem";
});

//Guess button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess || guess < 1 || guess > 20) {
    //Invalid input
    setMessage("No / Invalid Number!");
  } else if (guess === secretNum) {
    //Correct Guess
    setMessage("Correct Number! Congratulations!");
    domNum.textContent = secretNum;
    domBody.style.backgroundColor = "#60b347";
    domNum.style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      domHighScore.textContent = highScore;
    }
  } else if (guess !== secretNum) {
    setMessage(guess < secretNum ? "Too Low!" : "Too High!");
    if (score > 1) {
      score--;
      domScore.textContent = score;
    } else {
      setMessage("You Lose!");
      domScore.textContent = 0;
    }
  }
});
