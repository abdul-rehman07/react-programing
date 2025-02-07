import { useRef, useState } from "react";

export default function Player() {

  const PlayerName = useRef();

  const [enterName, setEnterName] = useState();

  function handleClick() {

    setEnterName(PlayerName.current.value)
    PlayerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enterName ? enterName : "unknown entity"}</h2>
      <p>
        <input
          ref={PlayerName} type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}