
import Tabbtn from "../button/TabButton";
import { Example } from "../button/Data.js";
import { useState } from "react";

export default function Examples() {
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
    )
}