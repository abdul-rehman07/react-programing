import Player from "./assets/player";
import GameBoard from "./assets/GameBoard.jsx";
import { useState } from "react";
import Log from "./assets/Log.jsx";
import { WINNING_COBINATION } from "./assets/WINNING_COBINATION.JS";

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

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = driveActivePlayer(gameTurns);

  let gameBoard = initialGameboard;
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COBINATION) {
    const firstSqureSybmol = gameBoard[combination[0].row][combination[0].column]
    const secondSqureSybmol = gameBoard[combination[1].row][combination[1].column]
    const thirdSqureSybmol = gameBoard[combination[2].row][combination[2].column]

    if (firstSqureSybmol &&
      firstSqureSybmol === secondSqureSybmol &&
      firstSqureSybmol === thirdSqureSybmol) {
      winner = firstSqureSybmol;
    }

  }

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
    }
    )
      ;
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
            />
            <Player
              initialName="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          {winner && <p>You Won {winner}!</p>}
          <GameBoard onSelectSqure={handleSelectSqure} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;
