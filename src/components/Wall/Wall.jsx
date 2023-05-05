import React from "react"

import styles from"./Wall.module.css"

export const Wall = ({ backgroundColor }) => {
    return <div className={styles.Wall} style={backgroundColor && {backgroundColor}}></div>
}
