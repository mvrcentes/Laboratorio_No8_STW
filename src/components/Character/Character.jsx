import React from "react"
import PropTypes from "prop-types"

import styles from "./Character.module.css"

export const Character = ({ backgroundImage }) => {
    const classes = backgroundImage
        ? `${styles.Character} ${styles[`Character__${backgroundImage}`]}`
        : styles.Character
    return <div className={classes}></div>
}

Character.propTypes = {
    backgroundImage: PropTypes.oneOf(["sapo", "pato", "nave"]),
}

Character.defaultProps = {
    backgroundImage: null,
}
