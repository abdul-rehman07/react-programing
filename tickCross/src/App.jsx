import Player from "./assets/player";
import GameBoard from "./assets/GameBoard.jsx";
import { useState } from "react";
import Log from "./assets/Log.jsx";
function driveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X');
  const activePlayer = driveActivePlayer(gameTurns);

  function handleSelectSqure(rowIndex, colIndex) {
    // setActivePlayer((curactiveplayer) => curactiveplayer === 'X' ? 'O' : 'X')
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
          <GameBoard onSelectSqure={handleSelectSqure} turns={gameTurns} />
        </div>
        <Log />
      </main>
    </>
  );
}

export default App;
