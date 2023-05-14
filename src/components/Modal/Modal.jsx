import { useState } from "react"

import styles from "./Modal.module.css"

export const Modal = ({ nombre, modal, onClick }) => {
    return (
        <>
            {modal && (
                <div className={styles.modal}>
                    <div className={styles.overlay}></div>
                    <div className={styles.modal__content}>
                        <h2>{nombre}</h2>
                        <button className={styles.close__modal} onClick={onClick}>Reiniciar</button>
                    </div>
                </div>
            )}
        </>
    )
}

