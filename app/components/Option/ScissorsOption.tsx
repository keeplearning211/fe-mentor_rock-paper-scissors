import React from 'react'
import { IconName } from '../IconImage/IconImage'
import { OptionSizeType } from './types'
import styles from './option.module.css'

interface ScissorsOptionProps {
  name: IconName,
  size: OptionSizeType
}

function ScissorsOption({ name, size }: ScissorsOptionProps) {
  return (
    <div className={`${styles.option} ${styles[size]}`}>ScissorsOption</div>
  )
}

export default ScissorsOption