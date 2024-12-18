import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tabbtn from "./button/TabButton";
import { Example } from "./button/Data.js";

function App() {
  const [count, setCount] = useState(0);
  const [passvalue, setPassValue] = useState("components");

  function handleSelect(selectedButton) {
    setPassValue(selectedButton);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <h2>Example</h2>
        <menu>
          <Tabbtn onSelect={() => handleSelect("components")}>Component</Tabbtn>
          <Tabbtn onSelect={() => handleSelect("jsx")}>jsx</Tabbtn>
          <Tabbtn onSelect={() => handleSelect("react")}>react</Tabbtn>
          <Tabbtn onSelect={() => handleSelect("button")}>button</Tabbtn>
        </menu>
        <div>
          <h3>{Example[passvalue].title}</h3>
          <p>{Example[passvalue].description}</p>
          <pre>
            <code>{Example[passvalue].code}</code>
          </pre>
        </div>
      </section>
    </>
  );
}

export default App;
