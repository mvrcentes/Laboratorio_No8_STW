import React, { useState } from "react"
import PropTypes from "prop-types"

import { useConfigContext } from "../../Contexts/Config"

import { Dropdown } from "../Dropdown/Dropdown"

import styles from "./Form.module.css"

export const Form = () => {
    const { config, setConfigValue } = useConfigContext()

    const onChangeLenght = (e) => {
        const value = parseInt(e.target.value)
        if (value >= 4 && value <= 100) {
            setConfigValue("largo", value)
        }
    }

    const onChangeWidth = (e) => {
        const value = parseInt(e.target.value)
        if (value >= 4 && value <= 100) {
            setConfigValue("ancho", value)
        }
    }

    return (
        <div className={styles.Form}>
            <Dropdown
                name="Skin personaje"
                value={config.character}
                items={["sapo", "pato", "nave"]}
                selected={config.character}
                setSelected={(selected) =>
                    setConfigValue("character", selected)
                }
            />

            <Dropdown
                name="Skin pared"
                value={config.wall}
                items={["tierra", "trampa", "asteroides"]}
                selected={config.wall}
                setSelected={(selected) =>
                    setConfigValue("wall", selected)
                }
            />

            <Dropdown
                name="Skin camino"
                value={config.path}
                items={["grama", "agua", "espacio"]}
                selected={config.path}
                setSelected={(selected) =>
                    setConfigValue("path", selected)
                }
            />

            <div className={styles.inputs}>
                <div className={styles.largo}>
                    Largo
                    <input
                        type="number"
                        placeholder="Largo"
                        value={config.largo}
                        onChange={onChangeLenght}
                        className={styles.input}
                    />
                </div>

                <div className={styles.ancho}>
                    Ancho
                    <input
                        type="number"
                        placeholder="Ancho"
                        value={config.ancho}
                        onChange={onChangeWidth}
                        className={styles.input}
                    />
                </div>
            </div>
        </div>
    )
}

Form.propTypes = {
    /**
     *
     */
    backgroundImage: PropTypes.oneOf(["tierra", "trampa", "asteroides"]),
}

Form.defaultProps = {
    backgroundImage: null,
}
