function easyComp(gameBoard) {
    while (true) {
        let position = randomPosition();
        if (!gameBoard[position].innerText) {
            return position;
        }
    }
}

function randomPosition() {
    let randomPosition = Math.random() * 8;
    return Number.parseInt(randomPosition);
}

export { easyComp };