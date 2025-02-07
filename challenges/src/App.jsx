import Player from './Player';
import './App.css'
import TimerChallenge from './assets/Component/TimerChallenge';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pro" targetTime={15} />
      </div>
    </>
  );
}

export default App;
