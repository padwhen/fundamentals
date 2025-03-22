"use client"

import { useEffect, useState } from "react"

const RED = "red"
const YELLOW = "yellow"
const GREEN = "green"

const RED_DELAY = 3000
const YELLOW_DELAY = 3000
const GREEN_DELAY = 3000

export default function TrafficLight() {
    return (
        <div className="flex gap-4 justify-center items-center h-screen">
            <Light initialColor="red" />
            <Light initialColor="green" />
            <Light initialColor="yellow" />
        </div>
    )
}

function Light({ initialColor}: { initialColor: string}) {
    const [enabled, setEnabled] = useState(initialColor)

    useEffect(() => {
        if (enabled === RED) {
            setTimeout(() => {
                setEnabled(GREEN)
            }, RED_DELAY)
        } else if (enabled === GREEN) {
            setTimeout(() => {
                setEnabled(YELLOW)
            }, GREEN_DELAY)
        } else if (enabled === YELLOW) {
            setTimeout(() => {
                setEnabled(RED)
            }, YELLOW_DELAY)
        }
    }, [enabled])

    function isActive(color: string) {
        return enabled === color
    }

    return (
        <div className="flex flex-col gap-4">
            <div
                className={`bg-red-600 rounded-full size-24 ${isActive(RED) ? 'opacity-100' : 'opacity-50'}`}
            >
            </div>
            <div
                className={`bg-yellow-600 rounded-full size-24 ${isActive(YELLOW) ? 'opacity-100' : 'opacity-50'}`}
            >
            </div>
            <div
                className={`bg-green-600 rounded-full size-24 ${isActive(GREEN) ? 'opacity-100' : 'opacity-50'}`}
            >
            </div>
        </div>
    )
}