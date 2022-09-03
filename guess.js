"use strict";
let score = 20;
let highscore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
document.querySelector(".check-button").addEventListener("click", function () {
  const input = Number(document.querySelector(".input").value);
  console.log(typeof input);
  if (!input) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (input === number) {
    document.querySelector(".message").textContent = "Correct answer💃🏻🎉💃🏻";
    document.querySelector(".number").textContent = number;
    document.querySelector(".number").style.width = "25vw";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".input").style.backgroundColor = "#60b347";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (input > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost💣";
    }
  } else if (input < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost💣";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".input").value = "";

  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "18vw";
  document.querySelector("body").style.backgroundColor = "rgb(36, 34, 34)";
  document.querySelector(".input").style.backgroundColor = "rgb(36, 34, 34)";
});

/*1)how to debug!!!!!!!
2)once it gets the answer,stop execution.
3)once it gets to 0,stop execution.
4)why is 1 added to the scores to be included
*/
