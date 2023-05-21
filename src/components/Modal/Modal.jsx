import { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./Modal.module.css"

export const Modal = ({ nombre, modal, onClick }) => {
    return (
        <>
            {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                    <div className={styles.modal__content}>
                        <h2>{nombre}</h2>
                        <Link to="/">
                            <button
                                className={styles.close__modal}
                                onClick={onClick}>
                                Reiniciar
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}
