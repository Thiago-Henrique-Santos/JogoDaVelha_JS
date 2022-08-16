const gameButtons = document.querySelectorAll(".column");
const gameButtonsMatrix = [document.querySelectorAll(".line1 .column"), document.querySelectorAll(".line2 .column"), document.querySelectorAll(".line3 .column")];
let symbolTimeControl = "x";

for (let i = 0; i < gameButtons.length; i++) {
  let button = gameButtons[i];
  button.addEventListener("click", () => {
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
    }
  });
}

function winnerShow() {
  const winSound = new Audio("./winSound.mp3");

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[0][1].innerText == symbolTimeControl && gameButtonsMatrix[0][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[0][1].style.backgroundColor = "lime";
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[1][0].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[1][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[1][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[1][2].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[2][0].innerText == symbolTimeControl && gameButtonsMatrix[2][1].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    gameButtonsMatrix[2][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[1][0].innerText == symbolTimeControl && gameButtonsMatrix[2][0].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][0].style.backgroundColor = "lime";
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[0][1].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][1].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][1].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][1].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[0][2].innerText == symbolTimeControl && gameButtonsMatrix[1][2].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    gameButtonsMatrix[1][2].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[0][0].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][2].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][0].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][2].style.backgroundColor = "lime";
    winSound.play();
  }

  if (gameButtonsMatrix[0][2].innerText == symbolTimeControl && gameButtonsMatrix[1][1].innerText == symbolTimeControl && gameButtonsMatrix[2][0].innerText == symbolTimeControl) {
    gameButtonsMatrix[0][2].style.backgroundColor = "lime";
    gameButtonsMatrix[1][1].style.backgroundColor = "lime";
    gameButtonsMatrix[2][0].style.backgroundColor = "lime";
    winSound.play();
  }
}