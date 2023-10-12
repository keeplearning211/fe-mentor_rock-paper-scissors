import React from 'react'
import IconImage, { IconName } from '../IconImage/IconImage';
import { OptionSizeType } from './types';

import styles from "./option.module.css";

interface OptionProps {
  name: IconName,
  size: OptionSizeType
}

function Option({ name, size }: OptionProps) {
  return (
    <div className={`${styles.option} ${styles[size]} ${styles[name]}`}>
      <IconImage name={name} size={60} />
    </div>
  )
}

export default Option