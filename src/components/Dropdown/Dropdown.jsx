import React from "react"
import PropTypes from "prop-types"

import styles from "./Dropdown.module.css"

import { Item } from "./Item/Item"

export const Dropdown = ({ name, items, selected, setSelected }) => {
    const [active, setActive] = React.useState(false)

    return (
        <div className={styles.Dropdown}>
            <div
                className={styles.Dropdown__button}
                onClick={() => setActive(!active)}
            >
                {selected ? selected : name}
            </div>
            {active && (
                <div className={styles.Dropdown__container}>
                    {items.map((item, index) => (
                        <Item
                            key={index}
                            name={item}
                            onClick={() => {
                                setSelected(item)
                                setActive(false)
                            }}
                        />
                    ))}
                </div>
            )}
            <span className="fas fa-caret-down"></span>
        </div>
    )
}

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    selected: PropTypes.string,
    setSelected: PropTypes.func,
}

export default Dropdown
