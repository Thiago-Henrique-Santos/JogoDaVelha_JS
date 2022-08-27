import { easyComp } from "./comp.js";

const gameButtons = document.querySelectorAll(".column");
const gameButtonsMatrix = [document.querySelectorAll(".line1 .column"), document.querySelectorAll(".line2 .column"), document.querySelectorAll(".line3 .column")];
const playAgain = document.querySelector("button.playAgain");
const startBot = document.querySelector("button.startBot");
let symbolTimeControl = "x";
let gameOver = false;
let botOn = false;

for (let i = 0; i < gameButtons.length; i++) {
  let button = gameButtons[i];
  button.addEventListener("click", () => {
    if (!gameOver) {
      if (!button.innerText) {
        if (symbolTimeControl == "x") {
          button.style.color = "orange";
          button.textContent = "x";
        } else {
          button.style.color = "RoyalBlue";
          button.textContent = "o";
        }
        winnerShow(symbolTimeControl, gameButtonsMatrix);
        symbolTimeControl = symbolTimeControl == "x" ? "o" : "x";

        if (botOn && thereIsPositionAvaible() && !gameOver) {
          let position = easyComp(gameButtons);
          position = gameButtons[position];
          position.style.color = "RoyalBlue";
          position.textContent = "o";

          winnerShow(symbolTimeControl, gameButtonsMatrix);
          symbolTimeControl = "x";
        }
      }
    }

  });
}

playAgain.addEventListener("click", () => {
  for (let i = 0; i < gameButtons.length; i++) {
    let button = gameButtons[i];
    button.textContent = "";
    button.style.backgroundColor = "white";
    symbolTimeControl = "x";
    botOn = false;
    gameOver = false;
  }
});

startBot.addEventListener("click", () => {
  botOn = true;
});

function winnerShow() {
  const winSound = new Audio("resources/sounds/winSound.mp3");

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[0][1].innerText == symbolTimeControl && gameButtonsMatrix[0][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[0][1].style.backgroundColor = "lime";
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[1][0].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[1][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[1][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[1][2].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[2][0].innerText == symbolTimeControl && gameButtonsMatrix[2][1].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    gameButtonsMatrix[2][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[1][0].innerText == symbolTimeControl && gameButtonsMatrix[2][0].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][0].style.backgroundColor = "lime";
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[0][1].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][1].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][1].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][1].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[0][2].innerText == symbolTimeControl && gameButtonsMatrix[1][2].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    gameButtonsMatrix[1][2].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }

  if (gameButtonsMatrix[0][2].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][0].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    winSound.play();
    gameOver = true;
  }
}

function thereIsPositionAvaible() {
  for (let i = 0; i < gameButtons.length; i++) {
    let button = gameButtons[i];
    if (!button.textContent) {
      return true;
    }
  }
  return false;
}