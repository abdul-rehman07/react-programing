const initialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function ({ onSelectSqure, truns }) {
    let gameBoard = initialGameboard;
    for (const trun of truns) {
        const { squre, player } = trun;
        const { row, col } = squre;

        gameBoard[row][col] = player;


    }

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
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqure(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>)
}
