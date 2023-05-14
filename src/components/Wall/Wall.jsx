import React from "react"
import PropTypes from "prop-types"

import styles from "./Wall.module.css"

export const Wall = ({ backgroundImage }) => {
    const classes = backgroundImage
        ? `${styles.Wall} ${styles[`Wall__${backgroundImage}`]}`
        : styles.Wall

    return (
        <div
            className={classes}
        />
    )
}

Wall.propTypes = {
    backgroundImage: PropTypes.oneOf(["tierra", "trampa", "asteroides"]),
}

Wall.defaultProps = {
    backgroundImage: null,
}


