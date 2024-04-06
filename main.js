const playerItem = "X";
const botItem = "O";
let finish = false;
const boardArray = Array.from({ length: 9 });
const winnerItems = [];
const wrongChooseText = document.getElementById("text");
const winnerText = document.getElementById("text2");
const button = document.querySelector("a");


const board = document.querySelector(".board");


board.addEventListener("mousedown", (event) => {
    checkMoves(event);
});


function checkMoves(event) {
    let botIndex;
    const elem = event.target;
    const elemIndex = elem.getAttribute("id");

    if (boardArray[elemIndex] == undefined) {
        elem.textContent = playerItem;
        boardArray[elemIndex] = playerItem;
        checkWinner();
        setTimeout(function () {
            if (!finish) {
                if (boardArray.includes(undefined)) {
                    do {
                        botIndex = Math.floor((Math.random() * boardArray.length));
                    } while (boardArray[botIndex] != undefined);

                    const botElem = document.getElementById(botIndex);
                    botElem.textContent = botItem;
                    boardArray[botIndex] = botItem;
                    checkWinner();
                }
                wrongChooseText.classList.remove("visible");
                wrongChooseText.classList.add("visibilityHidden");
            }
        }, 300);

    } else {
        if (!finish) {
            wrongChooseText.classList.remove("visibilityHidden");
            wrongChooseText.classList.add("visible");
        }
    }
}

function checkWinner() {
    if (isPlayerWinner()) {
        winnerText.textContent = "Game over, You won !";
        winnerText.classList.remove("visibilityHidden");
        winnerText.classList.add("visible");
        finish = true;
        winnerItems.forEach((item) => {
            document.getElementById(item).style.backgroundColor = "#88c965";
        })
    } else if (isPlayerLoser()) {
        document.getElementById("text2").textContent = "Game over, You lost !";
        winnerText.classList.remove("visibilityHidden");
        winnerText.classList.add("visible");
        finish = true;
        winnerItems.forEach((item) => {
            document.getElementById(item).style.backgroundColor = "#d66070";
        })
    } else if (!boardArray.includes(undefined)) {
        // document.getElementById("text2").textContent = "";
        winnerText.classList.remove("visibilityHidden");
        winnerText.classList.add("visible");
        finish = true;
    }

    if (finish) {
        fill();
        button.classList.remove("visibilityHidden");
        button.classList.add("visible");
    }
}


function isPlayerWinner() {
    if (boardArray[0] === playerItem && boardArray[1] === playerItem && boardArray[2] === playerItem) {
        winnerItems.push(0, 1, 2);
        return true;
    } else if (boardArray[0] === playerItem && boardArray[3] === playerItem && boardArray[6] === playerItem) {
        winnerItems.push(0, 3, 6);
        return true;
    } else if (boardArray[0] === playerItem && boardArray[4] === playerItem && boardArray[8] === playerItem) {
        winnerItems.push(0, 4, 8);
        return true;
    } else if (boardArray[1] === playerItem && boardArray[4] === playerItem && boardArray[7] === playerItem) {
        winnerItems.push(1, 4, 7);
        return true;
    } else if (boardArray[2] === playerItem && boardArray[5] === playerItem && boardArray[8] === playerItem) {
        winnerItems.push(2, 5, 8);
        return true;
    } else if (boardArray[2] === playerItem && boardArray[4] === playerItem && boardArray[6] === playerItem) {
        winnerItems.push(2, 4, 6);
        return true;
    } else if (boardArray[3] === playerItem && boardArray[4] === playerItem && boardArray[5] === playerItem) {
        winnerItems.push(3, 4, 5);
        return true;
    } else if (boardArray[6] === playerItem && boardArray[7] === playerItem && boardArray[8] === playerItem) {
        winnerItems.push(6, 7, 8);
        return true;
    } else {
        return false;
    }
}


function isPlayerLoser() {
    if (boardArray[0] === botItem && boardArray[1] === botItem && boardArray[2] === botItem) {
        winnerItems.push(0, 1, 2);
        return true;
    } else if (boardArray[0] === botItem && boardArray[3] === botItem && boardArray[6] === botItem) {
        winnerItems.push(0, 3, 6);
        return true;
    } else if (boardArray[0] === botItem && boardArray[4] === botItem && boardArray[8] === botItem) {
        winnerItems.push(0, 4, 8);
        return true;
    } else if (boardArray[1] === botItem && boardArray[4] === botItem && boardArray[7] === botItem) {
        winnerItems.push(1, 4, 7);
        return true;
    } else if (boardArray[2] === botItem && boardArray[5] === botItem && boardArray[8] === botItem) {
        winnerItems.push(2, 5, 8);
        return true;
    } else if (boardArray[2] === botItem && boardArray[4] === botItem && boardArray[6] === botItem) {
        winnerItems.push(2, 4, 6);
        return true;
    } else if (boardArray[3] === botItem && boardArray[4] === botItem && boardArray[5] === botItem) {
        winnerItems.push(3, 4, 5);
        return true;
    } else if (boardArray[6] === botItem && boardArray[7] === botItem && boardArray[8] === botItem) {
        winnerItems.push(6, 7, 8);
        return true;
    } else {
        return false;
    }
}


function fill() {
    for (let i = 0; i < boardArray.length; i++) {
        if (boardArray[i] === undefined) {
            boardArray[i] = "";
            document.getElementById(i).textContent = "";
        };
    };
};


