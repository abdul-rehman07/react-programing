import { useState } from "react"
export default function Player({ initialName, symbol, isActive }) {

    const [isedit, setIsedit] = useState(false);
    const [Save, setSave] = useState(initialName);

    function handlChange(event) {
        setSave(event.target.value);
    }

    function handlebtn() {
        setIsedit(editing => !editing)

    }

    let playerName = <span>{Save}</span>;
    // let btnname = 'EDIT';

    if (isedit) {
        playerName = <input type="text" required value={Save} onChange={handlChange} />
        // btnname = 'SAVE';
    }
    return (

        <li className={isActive ? 'active' : undefined}>
            <span id="player-id" className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handlebtn}>{isedit ? 'Save' : 'Edit'}</button>
        </li>)
}