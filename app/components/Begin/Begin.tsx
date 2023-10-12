"use client"
import React, { useEffect } from 'react'
import styles from './begin.module.css'
import Option from '../Option/Option'
import { useDispatch } from '@/lib/redux'
import { playAgain } from '@/lib/redux/slices/gameSlice'

function Begin() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(playAgain())
  }, [])
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