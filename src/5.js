// 5
const boardFunc = (round, board) => {
  console.log(" ");
  console.table(
    " | " +
      (board["1"] || "1 ") +
      " | " +
      (board["2"] || " 2 ") +
      " | " +
      (board["3"] || " 3 ") +
      " | "
  );
  console.log(
    " | " +
      (board["4"] || "4 ") +
      " | " +
      (board["5"] || " 5 ") +
      " | " +
      (board["6"] || " 6 ") +
      " | "
  );
  console.log(
    " | " +
      (board["7"] || "7 ") +
      " | " +
      (board["8"] || " 8 ") +
      " | " +
      (board["9"] || " 9 ") +
      " | "
  );
  console.log(" ");
};

const combination = (gameBoard) => {
  return (
    false ||
    (gameBoard["1"] &&
      gameBoard["1"] == gameBoard["2"] &&
      gameBoard["1"] == gameBoard["3"]) ||
    (gameBoard["4"] &&
      gameBoard["4"] == gameBoard["5"] &&
      gameBoard["4"] == gameBoard["6"]) ||
    (gameBoard["7"] &&
      gameBoard["7"] == gameBoard["4"] &&
      gameBoard["7"] == gameBoard["1"]) ||
    (gameBoard["7"] &&
      gameBoard["7"] == gameBoard["5"] &&
      gameBoard["7"] == gameBoard["3"]) ||
    (gameBoard["7"] &&
      gameBoard["7"] == gameBoard["8"] &&
      gameBoard["7"] == gameBoard["9"]) ||
    (gameBoard["8"] &&
      gameBoard["8"] == gameBoard["5"] &&
      gameBoard["8"] == gameBoard["2"]) ||
    (gameBoard["9"] &&
      gameBoard["9"] == gameBoard["6"] &&
      gameBoard["9"] == gameBoard["3"]) ||
    (gameBoard["9"] &&
      gameBoard["9"] == gameBoard["5"] &&
      gameBoard["9"] == gameBoard["1"])
  );
};

var defaultConf = {
  firstPlayer: {
    title: "FirstPlayer",
    symbol: "X",
  },
  secondPlayer: {
    title: "SecondPlayer",
    symbol: "O",
  },
};

function start(conf) {
  conf = Object.assign(defaultConf, conf || {});
  let gameOn = true;
  let firstPlayerMove,
    gameNums,
    computer,
    gameBoard,
    enterValues,
    currentPlayer,
    opponentPlayer;

  while (gameOn === true) {
    gameNums = 0;
    firstPlayerMove = true;
    gameBoard = {
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
      9: null,
    };
    boardFunc(gameNums++, gameBoard);

    for (var i = 0; i < 9; i++) {
      if (combination(gameBoard)) {
        console.log(
          `${currentPlayer.title} (${currentPlayer.symbol}) win the game`
        );
        alert(`${currentPlayer.title} (${currentPlayer.symbol}) win the game`);
        gameOn = false;
        break;
      }
      currentPlayer = conf.firstPlayer;
      opponentPlayer = conf.secondPlayer;
      if (!firstPlayerMove) currentPlayer = conf.secondPlayer;
      opponentPlayer = conf.firstPlayer;
      enterValues = undefined;

      while (gameBoard[enterValues] !== null || enterValues === undefined) {
        if (firstPlayerMove === false && computer === true) {
          enterValues = prompt(
            `${currentPlayer.symbol} enter numbers between 1 to 9 (enter -1 to leave)`
          );
        } else {
          enterValues = prompt(
            `${currentPlayer.symbol} enter numbers between 1 to 9 (enter -1 to leave)`
          );
          if (enterValues == -1) {
            gameOn = false;
            break;
          }
        }
      }
      if (gameOn == false) {
        break;
      }
      gameBoard[enterValues] = currentPlayer.symbol;
      firstPlayerMove = !firstPlayerMove;
      boardFunc(gameNums++, gameBoard);
    }
    if (gameOn === true) {
      console.log("Tie Game");
      gameOn = false;
    }
  }
}
