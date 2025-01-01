import Tabbtn from "../button/TabButton";
import { Example } from "../button/Data.js";
import { useState } from "react";
import Section from "./Section.jsx";
import Tab from "../button/Tab.jsx";

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
        <Section title={"Example"}>
            <Tab button={
                <>
                    <Tabbtn isSelected={passvalue === "components"} onClick={() => handleSelect("components")}>Component</Tabbtn>
                    <Tabbtn isSelected={passvalue === "jsx"} onClick={() => handleSelect("jsx")}>jsx</Tabbtn>
                    <Tabbtn isSelected={passvalue === "react"} onClick={() => handleSelect("react")}>react</Tabbtn>
                    <Tabbtn isSelected={passvalue === "button"} onClick={() => handleSelect("button")}>button</Tabbtn>
                </>
            }>
                {valuepassing}
            </Tab>
            <menu>
            </menu>

        </Section>
    )
}