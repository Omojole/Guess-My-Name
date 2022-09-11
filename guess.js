"use strict";
//Selecting elements
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;

const answer = document.querySelector(".answer");
const selectNumber = document.querySelector(".number");
const checkBtn = document.querySelector(".check-button");
const inputNumber = document.querySelector(".input");
const scoreEl = document.querySelector(".score");

//Defining the game message function
const message = function (message) {
  document.querySelector(".message").textContent = message;
};

//Defining the check-btn function
const check = function () {
  const input = Number(document.querySelector(".input").value);
  //if there is no input
  if (!input) {
    message("⛔ No Number");
  }
  //if input is = random number
  else if (input === number) {
    message("Correct answer💃🏻🎉💃🏻");
    selectNumber.textContent = number;
    selectNumber.style.width = "25vw";
    document.querySelector("body").style.backgroundColor = "#60b347";
    inputNumber.classList.add("hidden");
    checkBtn.classList.add("hidden");
    //determining the new highscore when the answer is correct
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  }
  //if the input is wrong
  else if (input !== number) {
    // score cannot be less than 1
    if (score > 1) {
      message(input > number ? "Too High📈" : "Too low📉");
      score--;
      scoreEl.textContent = score;
    }
    //once score is less than 1
    else {
      message("You Lost the Game💣");
      scoreEl.textContent = "0";
      inputNumber.classList.add("hidden");
      checkBtn.classList.add("hidden");
      answer.classList.add("show");
      answer.style.justifyContent = "center";
      selectNumber.textContent = number;
    }
  }
};

//Check answer
checkBtn.addEventListener("click", function () {
  check();
});

//Restarting the game
document.querySelector(".again").addEventListener("click", function () {
  //selecting a new random number
  number = Math.trunc(Math.random() * 20) + 1;
  //resetting the initial values
  score = 20;
  message("Start guessing...");
  selectNumber.textContent = "?";
  inputNumber.value = "";
  scoreEl.textContent = score;
  selectNumber.style.width = "18vw";
  document.querySelector("body").style.backgroundColor = "rgb(36, 34, 34)";
  inputNumber.classList.add("show");
  checkBtn.classList.add("show");
  checkBtn.style.justifyContent = "center";
  answer.classList.add("hidden");
});

//activating the Enter button to trigger the click event
document.addEventListener("keydown", function (i) {
  if (i.key === "Enter") {
    check();
  }
});
