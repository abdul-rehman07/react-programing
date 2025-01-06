import { useState } from "react"
export default function Player({ initialName, symbol }) {

    const [isedit, setIsedit] = useState(false);
    const [Save, setSave] = useState(initialName);

    function handlChange(event) {
        setSave(event.target.value);
    }

    function handlebtn() {
        setIsedit(editing => !editing)

    }

    let playerName = <span>{Save}</span>;
    let btnname = 'EDIT';

    if (isedit) {
        playerName = <input type="text" required defaultValue={Save} onChange={handlChange} />
        btnname = 'SAVE';
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