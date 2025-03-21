"use client"
import { useRef, useState } from "react"

type Operator = "+" | "-" | "*" | "/" | "="
type Input = number | Operator

export default function Calculator() {
    const [input, setInput] = useState("")
    const inputsRef = useRef<Input[]>([])

    function appendNumber(char: string) {
        setInput(input + char)
    }

    function clear() {
        setInput("")
        inputsRef.current = []
    }

    function handleOperator(operator: Operator) {
        inputsRef.current.push(parseFloat(input))

        if (operator !== "=") {
            inputsRef.current.push(operator)
        }

        if (inputsRef.current.length === 3) {
            const [a, op, b] = inputsRef.current.splice(0, 3) as [
                number,
                Operator,
                number
            ]
            let result = 0
            switch (op) {
                case "+":
                    result = a + b
                    break;
                case "-":
                    result = a - b
                    break;
                case "*":
                    result = a * b
                    break;
                default:
                    result = a / b
                    break
            }
            setInput(result.toString())
        } else {
            setInput('')
        }
    }
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="w-full max-w-md grid grid-cols-4 gap-2 bg-gray-900 p-4 rounded-lg shadow-lg">
                <div className="h-16 bg-gray-700 p-4 text-white text-3xl col-span-4 flex items-center justify-end rounded-md">
                    {input}
                </div>
                <button className="bg-blue-400 p-2 text-white text-2xl h-16" onClick={() => handleOperator("+")}>
                    +
                </button>
                <button className="bg-blue-400 p-2 text-white text-2xl h-16" onClick={() => handleOperator("-")}>
                    -
                </button>
                <button className="bg-blue-400 p-2 text-white text-2xl h-16" onClick={() => handleOperator("*")}>
                    x
                </button>
                <button className="bg-blue-400 p-2 text-white text-2xl h-16" onClick={() => handleOperator("/")}>
                    /
                </button>

                <div className="col-span-3 grid grid-cols-3 gap-2">
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("7")}>
                        7
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("8")}>
                        8
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("9")}>
                        9
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("4")}>
                        4
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("5")}>
                        5
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("6")}>
                        6
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("1")}>
                        1
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("2")}>
                        2
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("3")}>
                        3
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber("0")}>
                        0
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => appendNumber(".")}>
                        .
                    </button>
                    <button className="bg-gray-400 p-2 text-white text-2xl" onClick={() => clear()}>
                        C
                    </button>
                </div>
                <button className="flex justify-center items-center bg-blue-400 p-2 text-white text-2xl" onClick={() => handleOperator("=")}>
                    =
                </button>
            </div>
        </div>
    )
}