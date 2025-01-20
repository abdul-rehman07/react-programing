import Player from "./assets/player";
import GameBoard from "./assets/GameBoard.jsx";
import { useState } from "react";
import Log from "./assets/Log.jsx";
import { WINNING_COBINATION } from "./assets/WINNING_COBINATION.JS";
import GameOver from "./assets/GameOver.jsx";

const initialGameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}


function deriveWinner() {
  let winner;

  let hasDraw = gameTurns.length === 9 && !winner;

  for (const combination of WINNING_COBINATION) {
    const firstSqureSybmol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSqureSybmol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSqureSybmol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSqureSybmol &&
      firstSqureSybmol === secondSqureSybmol &&
      firstSqureSybmol === thirdSqureSybmol
    ) {
      winner = Players[firstSqureSybmol];
    }
  }
  return winner;
}

function deriveGameboard() {
  let gameBoard = [...initialGameboard.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {

  const [Players, setPlayers] = useState(
    {
      X: 'Player 1',
      O: 'Player 2',
    }
  );
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = driveActivePlayer(gameTurns);



  const winner = deriveWinner(gameBoard, Players)
  const gameboard = deriveGameboard(gameTurns)

  function handleSelectSqure(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = driveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex,
          },
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerName(symbol, newName) {
    setPlayers(prevPlayer => {

      return {
        ...prevPlayer,
        [symbol]: newName
      }
    }
    )
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              initialName="player 1"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerName}
            />
            <Player
              initialName="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerName}
            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
          <GameBoard onSelectSqure={handleSelectSqure} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
