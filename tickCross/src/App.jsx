import Player from "./assets/player"

function App() {

  return (
    <>
      <main>
        <div id="game-container">

          <Player name='player 1' symbol='X' />
          <Player name='player 2' symbol='O' />
        </div>
      </main>

    </>
  )
}

export default App
