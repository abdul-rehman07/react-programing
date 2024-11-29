import { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  function increasecount() {
    setCount((prevCount) => {
      if (prevCount < 10) {
        return prevCount + 1;
      }

      return prevCount;
    });
  }

  function decreaseCount() {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1;
      }
      return prevCount;
    });
  }
  function resetCount() {
    setCount(4);
  }
  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <h1>{count}</h1>
      <button onClick={increasecount}>+</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default App;
