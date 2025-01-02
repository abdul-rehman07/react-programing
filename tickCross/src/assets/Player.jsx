import { useState } from "react"
export default function Player({ name, symbol }) {

    const [isedit, setIsedit] = useState(false);

    function handlebtn() {
        setIsedit(!isedit)

    }

    let playerName = <span>{name}</span>;
    let btnname = 'edit';

    if (isedit) {
        playerName = <input type="text" required value={name} />
        btnname = 'save';
    }
    return (

        <li>
            <span id="player-id">
                {playerName}
                <span>{symbol}</span>
            </span>
            <button onClick={handlebtn}>{btnname}</button>
        </li>)
}