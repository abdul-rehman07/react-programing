import Player from "./assets/player"

function App() {

  return (
    <>
      <main>
        <div id="game-container">

          <Player initialName='player 1' symbol='X' />
          <Player initialName='player 2' symbol='O' />
        </div>
      </main>

    </>
  )
}

export default App
