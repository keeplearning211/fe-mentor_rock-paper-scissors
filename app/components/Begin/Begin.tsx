import React from 'react'
import styles from './begin.module.css'
import Image from 'next/image'
import IconImage from '../IconImage/IconImage'
import Option from '../Option/Option'

function Begin() {
  return (
    <div data-test-name="begin-container" className={styles.container}>
      <div className={styles.scissors}>
        <Option name="scissors" size="medium" />
      </div>
      <div className={styles.paper}>
        <Option name="paper" size="medium" />
      </div>
      <div className={styles.rock}>
        <Option name="rock" size="medium" />
      </div>
    </div>
  )
}

export default Begin