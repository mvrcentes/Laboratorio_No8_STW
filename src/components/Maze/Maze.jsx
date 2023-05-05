import React from "react"

import { Wall } from "../Wall/Wall"
import { Way } from "../Way/Way"

import styles from "./Maze.module.css"

export const Maze = ({ data }) => {
    data = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 3, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 3, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 3, 0, 1, 1, 1],
    ]

    return (
        <div className={styles.Maze}>
            {data.map((row, i) => {
                return (
                    <div key={i} className={styles.Maze__row}>
                        {row.map((cell, j) => {
                            if (cell === 1) {
                                return <Wall key={j} />
                            } else {
                                return <Way key={j} />
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}
