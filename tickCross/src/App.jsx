import Player from "./assets/player"
import GameBoard from "./assets/GameBoard.jsx"
import { useState } from "react"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSqure() {
    setActivePlayer((curactiveplayer) => curactiveplayer === 'X' ? 'O' : 'X')
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">

            <Player initialName='player 1' symbol='X' isActive={activePlayer === 'X'} />
            <Player initialName='player 2' symbol='O' isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard onSelectSqure={handleSelectSqure} activePlayerSymbol={activePlayer} />
        </div>
      </main>

    </>
  )
}

export default App
