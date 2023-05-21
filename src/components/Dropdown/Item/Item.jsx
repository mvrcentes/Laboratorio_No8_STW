import React from "react"
import PropTypes from "prop-types"

import styles from "./Item.module.css"

export const Item = ({ name, onClick }) => {
  return (
    <div className={styles.Item} onClick={() => onClick(name)}>{name}</div>
  )
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

Item.propTypes = {
  backgroundImage: PropTypes.oneOf(["tierra", "trampa", "asteroides"]),
}
