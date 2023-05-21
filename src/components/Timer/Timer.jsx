import React from "react"
import PropTypes from "prop-types"

import { useConfigContext } from "../../Contexts/Config"

import styles from "./Timer.module.css"

export const Timer = () => {
    const { config, setConfigValue } = useConfigContext()

    const handleMinsChange = (e) => {
        setConfigValue("mins", parseInt(e.target.value))
    }

    const handleSecsChange = (e) => {
        setConfigValue("secs", parseInt(e.target.value))
    }


    return (
        <div className={styles.timer}>
            <form action="#">
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Minutos"
                    value={config.mins}
                    onChange={handleMinsChange}
                />
                <input
                    className={styles.input}
                    type="number"
                    placeholder="Segundos"
                    value={config.secs}
                    onChange={handleSecsChange}
                />
            </form>
        </div>
    )
}

Timer.propTypes = {
    mins: PropTypes.number.isRequired,
    secs: PropTypes.number.isRequired,
}

Timer.defaultProps = {
    mins: 0,
    secs: 0,
}
