import React from "react"
import PropTypes from "prop-types"

import styles from "./Way.module.css"

export const Way = ({ backgroundImage }) => {
    const classes = backgroundImage
        ? `${styles.Way} ${styles[`Way__${backgroundImage}`]}`
        : styles.Way

    return (
        <div
            // className={[styles.Way, `${styles.Way}--${backgroundImage}`].join(' ')}
            className={classes}
        ></div>
    )
}

Way.propTypes = {
    backgroundImage: PropTypes.oneOf(["grama", "agua", "espacio", "meta"]),
}

Way.defaultProps = {
    backgroundImage: null,
}
