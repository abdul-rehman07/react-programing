import { useRef, useState } from "react";

export default function Player() {

  const PlayerName = useRef();

  const [enterName, setEnterName] = useState();
  // const [submit, setSubmit] = useState(false);

  // function handleName(event) {
  //   setSubmit(false)
  //   setEnterName(event.target.value)
  // }
  function handleClick() {

    setEnterName(PlayerName.current.value)
  }
  return (
    <section id="player">
      <h2>Welcome {enterName ? enterName : "unknown entity"}</h2>
      <p>
        <input
          ref={PlayerName} type="text"
        //  onChange={handleName} value={enterName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}