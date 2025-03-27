"use client"

import { useEffect, useState } from "react"

type Token = "X" | "O" | ""

export default function TicTacToe() {
    const [grid, setGrid] = useState<Token[][]>([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ])
    const [currentPlayer, setCurrentPlayer] = useState<"X"|"O">("X")
    const [winner, setWinner] = useState<"X"|"O"|"Tie"|"None">("None")

    useEffect(() => {
        const result = checkWin()
        setWinner(result)
    }, [grid])

    function handleCellClicked(rowIndex: number, colIndex: number) {
        setGrid((prev) => {
            const newGrid = [...prev].map((row) => [...row])
            newGrid[rowIndex][colIndex] = currentPlayer
            return newGrid    
        })
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }

    function checkWin(): "X"|"O"|"Tie"|"None" {
        // 0 ["0", "1", "2"]
        // 1 ["0", "1", "2"]
        // 2 ["0", "1", "2"]
        for (let i = 0; i < 3; i++) {
            // Rows
            if (
                grid[i][0] === grid[i][1] &&
                grid[i][1] === grid[i][2] &&
                grid[i][0] !== ""
            ) {
                return grid[i][0] as "X" | "O"
            }

            // Columns
            if (
                grid[0][i] === grid[1][i] &&
                grid[1][i] === grid[2][i] &&
                grid[0][i] !== ""
            ) {
                return grid[0][i] as "X" | "O"
            }

            // Diagonals
            if (
                grid[0][0] === grid[1][1] && 
                grid[1][1] === grid[2][2] &&
                grid[0][0] !== ""
            ) {
                return grid[0][0]
            }

            if (
                grid[0][2] === grid[1][1] &&
                grid[1][1] === grid[2][0] &&
                grid[0][2] !== ""
            ) {
                return grid[0][2]
            }
        }
        return grid.flat().every((grid) => grid !== "") ? "Tie" : "None"
    }

    function resetGame() {
        setGrid([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ])
        setCurrentPlayer("X")
        setWinner("None")
    }
    return (
        <div className="flex flex-col gap-8 h-screen justify-center items-center">
            {winner !== "None" && (
                <div>
                    <div className="text-2xl text-center">{winner} wins!</div>
                    <button className="bg-gray-800 text-white p-2 rounded" onClick={resetGame}>
                        Play Again
                    </button>
                </div>
            )}
            <div className="flex flex-col gap-2 bg-gray-200 rounded p-4 text-black">
                {grid.map((row, rowIndex) => (
                    <div className="flex gap-2" key={rowIndex}>
                        {row.map((piece, colIndex) => (
                            <button
                                key={colIndex}
                                onClick={() => handleCellClicked(rowIndex, colIndex)}
                                disabled={piece !== "" || winner !== "None"}
                                className="text-2xl bg-gray-800 size-20 text-white flex justify-center items-center"
                            >
                                {piece}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}