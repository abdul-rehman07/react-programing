import { useState } from "react";
import "./App.css";
import Tabbtn from "./button/TabButton";
import { Example } from "./button/Data.js";
import { CORE_CONCEPTS } from "./Database.js";
import Header from "./Header/Header.jsx";
import CoreConcept from "./core-cocept.jsx";




function App() {
  const [passvalue, setPassValue] = useState();

  function handleSelect(selectedButton) {
    setPassValue(selectedButton);
  }

  let valuepassing = <p>Please press the button.</p>;

  if (passvalue) {
    valuepassing = (
      <div>
        <h3>{Example[passvalue].title}</h3>
        <p>{Example[passvalue].description}</p>
        <pre>
          <code>{Example[passvalue].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main>
        <section>
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptsitems) => (
              <CoreConcept key={conceptsitems.title} {...conceptsitems} />
            ))}

          </ul>
        </section>
      </main>
      <section>
        <h2>Example</h2>
        <menu>
          <Tabbtn isSelected={passvalue === "components"} onSelect={() => handleSelect("components")}>Component</Tabbtn>
          <Tabbtn isSelected={passvalue === "jsx"} onSelect={() => handleSelect("jsx")}>jsx</Tabbtn>
          <Tabbtn isSelected={passvalue === "react"} onSelect={() => handleSelect("react")}>react</Tabbtn>
          <Tabbtn isSelected={passvalue === "button"} onSelect={() => handleSelect("button")}>button</Tabbtn>
        </menu>
        {valuepassing}
      </section>
    </>
  );
}

export default App;
