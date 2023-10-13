'use client'
import React, { useState } from 'react'
import styles from './ruleModal.module.css'
import RulesModal from './RuleModal'

function RuleModalBtn() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.rulesBtnWrapper}>
      <button aria-label="open rule modal" className={styles.rulesBtn} onClick={handleOpen}>Rules</button>
      {isOpen &&
        <RulesModal onClose={handleClose} />
      }
    </div>
  )
}

export default RuleModalBtn