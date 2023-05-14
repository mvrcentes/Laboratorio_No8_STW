import React from 'react'

import { Form } from '../components/Form/Form'
import { Timer } from '../components/Timer/Timer'
import { Button } from '../components/Button/Button'

import styles from './Page.module.css'

export const Menu = () => {
    
  return (
    <div className={styles.Menu}>
        <Form />
        <Timer />
        <Button name="INICIAR" link="/game" />
    </div>
  )
}
