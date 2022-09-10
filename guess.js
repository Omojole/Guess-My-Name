"use strict";
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const message = function (message) {
  document.querySelector(".message").textContent = message;
};
const selectNumber = document.querySelector(".number");
const checkBtn = document.querySelector(".check-button");
const inputNumber = document.querySelector(".input");

//defining the check-btn function
const check = function () {
  const input = Number(document.querySelector(".input").value);
  if (!input) {
    message("⛔ No Number");
  } else if (input === number) {
    message("Correct answer💃🏻🎉💃🏻");
    selectNumber.textContent = number;
    selectNumber.style.width = "25vw";
    document.querySelector("body").style.backgroundColor = "#60b347";
    inputNumber.style.display = "none";
    checkBtn.style.display = "none";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (input !== number) {
    if (score > 1) {
      message(input > number ? "Too High📈" : "Too low📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("You Lost the Game💣");
      document.querySelector(".score").textContent = "0";
      inputNumber.style.display = "none";
      checkBtn.style.display = "none";
      document.querySelector(".answer").style.display = "flex";
      document.querySelector(".answer").style.justifyContent = "center";
      selectNumber.textContent = number;
    }
  }
};
checkBtn.addEventListener("click", function () {
  check();
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  message("Start guessing...");
  selectNumber.textContent = "?";
  inputNumber.value = "";
  document.querySelector(".score").textContent = score;
  selectNumber.style.width = "18vw";
  document.querySelector("body").style.backgroundColor = "rgb(36, 34, 34)";
  inputNumber.style.display = "flex";
  checkBtn.style.display = "flex";
  checkBtn.style.justifyContent = "center";
  document.querySelector(".answer").style.display = "none";
});

document.addEventListener('keydown', function (i) {
  if(i.key==='Enter'){
  check()
}});
/*
using add and remove classes instead of styles....use comments...define varriables and assign them
*/
