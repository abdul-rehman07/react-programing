import Player from "./assets/player"
import GameBoard from "./assets/GameBoard.jsx"
import { useState } from "react"
import Log from "./assets/Log.jsx";

function App() {
  const [gameTruns, setGameTruns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');


  function handleSelectSqure(rowIndex, colIndex) {
    setActivePlayer((curactiveplayer) => curactiveplayer === 'X' ? 'O' : 'X')
    setGameTruns((prevTruns) => {
      let currentPlayer = 'X';

      if (prevTruns.length > 0 && prevTruns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTruns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTruns,
      ];

      return updatedTruns;
    }
    )
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">

            <Player initialName='player 1' symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName='player 2' symbol='O' isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard onSelectSqure={handleSelectSqure}
            truns={gameTruns} />
        </div>
        <Log />
      </main>

    </>
  )
}

export default App
