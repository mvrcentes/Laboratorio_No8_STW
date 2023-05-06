import React, { useState, useEffect } from "react"

import { Wall } from "../Wall/Wall"
import { Way } from "../Way/Way"
import { Character } from "../Character/Character"

import styles from "./Maze.module.css"

let data = [
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 1],
]

export const Maze = ({  }) => {
    const [position, setPosition] = useState({ x: 1, y: 1 })

    const movePlayer = (dx, dy) => {
        let [x, y] = [-1, -1]


        for (let i = 0; i < data.length; i++) {
            const index = data[i].indexOf(2)
            if (index !== -1) {
                
                x = index
                y = i
                break
            }
        }

        if (data[y + dy][x + dx] === 0) {
            data[y][x] = 0
            data[y + dy][x + dx] = 2
            setPosition({ x: x + dx, y: y + dy })
        }

        console.log(data)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            switch (event.key) {
                case "ArrowUp":
                    movePlayer(0, -1)
                    break
                case "ArrowDown":
                    movePlayer(0, 1)
                    break
                case "ArrowLeft":
                    movePlayer(-1, 0)
                    break
                case "ArrowRight":
                    movePlayer(1, 0)
                    break
                default:
                    break
            }
        }
        document.addEventListener("keydown", handleKeyPress)
        return () => {
            document.removeEventListener("keydown", handleKeyPress)
        }
    }, [position])

    

    return (
        <div className={styles.Maze}>
            {data.map((row, i) => {
                return (
                    <div key={i} className={styles.Maze__row}>
                        {row.map((cell, j) => {
                            if (cell === 1) {
                                return <Wall key={j} />
                            } else if (cell === 0) {
                                return <Way key={j} />
                            } else if (cell === 2) {
                                return <Character key={j} />
                            } else {
                                return null
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}
