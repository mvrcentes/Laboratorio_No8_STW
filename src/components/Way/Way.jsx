import React from "react"

import styles from "./Way.module.css"

export const Way = (backgroundImg) => {
    return (
        <div
            className={styles.Way}
            style={backgroundImg && { backgroundImg }}
        ></div>
    )
}

