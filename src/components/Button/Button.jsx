import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import style from "./Button.module.css"

export const Button = ({ name, link }) => {
    return link ? (
        <Link
            to={link}
            className={style.Button}
            style={{ textDecoration: "none" }}
        >
            {name}
        </Link>
    ) : (
        <div className={style.Button}>{name}</div>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
}

export default Button
