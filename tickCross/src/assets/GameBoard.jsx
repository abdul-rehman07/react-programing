import { useState } from "react";

const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function () {
    const [gameBoard, setgameBoard] = useState(initialGameboard);

    function handleselectedbtn(rowIndex, colIndex) {
        setgameBoard((prevBtn) => {
            const updatebtn = [...prevBtn.map(innerArray => [...innerArray])]
            updatebtn[rowIndex][colIndex] = "X";
            return updatebtn;
        });
    }

    return (
        <ol id="main-gameboard">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleselectedbtn(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>)
}
