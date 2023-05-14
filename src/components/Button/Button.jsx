import React from "react"
import { Link } from "react-router-dom"

import style from "./Button.module.css"

export const Button = ({ name, onClick, link }) => {
    return link ? (
        <Link
            to={link}
            className={style.Button}
            style={{ textDecoration: "none" }}>
            {name}
        </Link>
    ) : (
        <div className={style.Button}>{name}</div>
    )
}
