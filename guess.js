"use strict";
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
const message = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check-button").addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  console.log(typeof input);
  if (!input) {
    message("⛔ No Number");
  } else if (input === number) {
    message("Correct answer💃🏻🎉💃🏻");
    document.querySelector(".number").textContent = number;
    document.querySelector(".number").style.width = "25vw";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".input").style.display = "none";
    document.querySelector(".check-button").style.display = "none";

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
      document.querySelector(".input").style.display = "none";
      document.querySelector(".check-button").style.display = "none";
      document.querySelector(".answer").style.display = "flex";
      document.querySelector(".answer").style.justifyContent = "center";
      document.querySelector(".number").textContent = number;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  message("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "18vw";
  document.querySelector("body").style.backgroundColor = "rgb(36, 34, 34)";
  document.querySelector(".input").style.display = "flex";
  document.querySelector(".check-button").style.display = "flex";
  document.querySelector(".check-button").style.justifyContent = "center";
});
