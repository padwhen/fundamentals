"use client"

import { useState } from "react"

export default function TowerOfHanoi() {
    const [towers, setTowers] = useState<number[][]>([[3, 2, 1], [], []])
    const [selectedTower, setSelectedTower] = useState<number | undefined>(undefined)

    const getDiskColor = (size: number) => {
        switch(size) {
            case 1: return "bg-red-500"; // Smallest disk, red
            case 2: return "bg-yellow-500"; // Middle disk, yellow
            case 3: return "bg-green-500"; // Largest disk, green
            default: return "bg-gray-500";
        }
    }

    function handleClickTower(clickedTowerIndex: number) {
        if (selectedTower !== undefined) {
            const newTowers = [...towers].map((tower) => [...tower])
            const fromTower = newTowers[selectedTower]
            const toTower = newTowers[clickedTowerIndex]
            const lastTower = newTowers[2]

            const fromValue = fromTower[fromTower.length - 1]
            const toValue = toTower[toTower.length - 1]

            if (toValue === undefined || fromValue < toValue) {
                fromTower.pop()
                toTower.push(fromValue)
                setTowers(newTowers)
                setSelectedTower(undefined)
                if (lastTower.length === 3) {
                    alert('You win!')
                }
            }
        } else {
            setSelectedTower(clickedTowerIndex)
        }
    }

    return (
        <div className="relative flex gap-48 justify-center items-center h-screen w-full">
            {/* Tower Layout */}
            {towers.map((tower, towerIndex) => (
                <div
                    key={`tower-${towerIndex}`}
                    className={`flex flex-col items-center relative cursor-pointer ${selectedTower === towerIndex ? "border-4 border-blue-500" : "border-2 border-gray-400"}`}
                    onClick={() => handleClickTower(towerIndex)} // Optional: allow selecting the tower
                >
                    {/* Tower Base */}
                    <div className="h-48 w-8 bg-gray-600 mb-4"></div>

                    {/* Render Disks */}
                    {tower.map((diskSize, diskIndex) => (
                        <div
                            key={`disk-${diskIndex}`}
                            className={`${getDiskColor(diskSize)} h-6 absolute`}
                            style={{
                                width: `${diskSize * 60}px`,  // Dynamically set width based on disk size
                                bottom: `${diskIndex * 28}px`,  // Stack disks with space between them
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}
