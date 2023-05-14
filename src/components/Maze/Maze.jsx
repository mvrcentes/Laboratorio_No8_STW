import React, { useState, useEffect } from "react"

import { Wall } from "../Wall/Wall"
import { Way } from "../Way/Way"
import { Character } from "../Character/Character"
import { Modal } from "../Modal/Modal"

import styles from "./Maze.module.css"

export const Maze = ({ prompt }) => {
    const [win, setWin] = useState(false)
    const [lost, setLost] = useState(false)
    const [maze, setMaze] = useState([])

    const fetchMaze = async () => {
        const response = await fetch(
            `https://maze.uvgenios.online/?type=json&w=${prompt.ancho}&h=${prompt.largo}`
        )
        const data = await response.json()
        setMaze(data)
    }

    const movePlayer = (dx, dy) => {
        console.log("move palyyer")
        setMaze((oldMaze) => {
            console.log("entro")
            const newMaze = [...oldMaze]

            let [x, y] = [null, null]

            for (let i = 0; i < oldMaze.length; i++) {
                const index = oldMaze[i].indexOf("p")
                if (index !== -1) {
                    x = index
                    y = i
                    break
                }
            }

            if (newMaze[y + dy][x + dx] === " ") {
                newMaze[y][x] = " "
                newMaze[y + dy][x + dx] = "p"
            }
            
            if (newMaze[y + dy][x + dx] === "g") {
                // setWin(true)
            }
            return newMaze
        })
    }

    useEffect(() => {
        fetchMaze()
    }, [])

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log("key pressed")
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
    }, [])

    return (
        <div className={styles.Maze}>
            {maze.map((row, i) => {
                return (
                    <div key={i} className={styles.Maze__row}>
                        {row.map((cell, j) => {
                            if (cell === "+" || cell === "-" || cell === "|") {
                                return (
                                    <Wall
                                        key={j}
                                        backgroundImage={prompt.wall}
                                    />
                                )
                            } else if (cell === " ") {
                                return (
                                    <Way
                                        key={j}
                                        backgroundImage={prompt.path}
                                    />
                                )
                            } else if (cell === "p") {
                                return (
                                    <Character
                                        key={j}
                                        backgroundImage={prompt.character}
                                    />
                                )
                            } else if (cell === "g") {
                                return <Way key={j} backgroundImage="meta" />
                            } else {
                                return null
                            }
                        })}
                    </div>
                )
            })}

            <Modal
                modal={win}
                nombre="Ganaste"
                onClick={() => {
                    setWin(false)
                }}
            />
            <Modal modal={lost} nombre="Perdiste" />
        </div>
    )
}
