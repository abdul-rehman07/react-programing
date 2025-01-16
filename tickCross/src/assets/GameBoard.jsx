

export default function ({ onSelectSqure, board }) {


    // const [gameBoard, setgameBoard] = useState(initialGameboard);

    // function handleselectedbtn(rowIndex, colIndex) {
    //     setgameBoard((prevBtn) => {
    //         const updatebtn = [...prevBtn.map(innerArray => [...innerArray])]
    //         updatebtn[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatebtn;
    //     });

    //     onSelectSqure();
    // }

    return (
        <ol id="main-gameboard">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqure(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}