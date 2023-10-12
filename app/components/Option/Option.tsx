
'use client'
import React from 'react';
import { useDispatch } from '@/lib/redux';
import IconImage, { IconName } from '../IconImage/IconImage';
import { OptionSizeType } from './types';
import { setUserDecision, GameDecision, setAppDecision } from '@/lib/redux/slices/gameSlice';

import styles from "./option.module.css";
import { usePathname, useRouter } from 'next/navigation';

interface OptionProps {
  name: Extract<IconName, GameDecision>,
  size: OptionSizeType
}

function Option({ name, size }: OptionProps) {
  const dispatch = useDispatch()
  const router = useRouter()
  const pathname = usePathname()

  const clickable = pathname === '/'
  const handleClick = () => {
    if (!clickable) {
      return
    }
    dispatch(setUserDecision(name))
    dispatch(setAppDecision(getRandomAppDecision()))
    router.push('/result')
  }

  return (
    <div
      className={`${styles.option} ${styles[size]} ${styles[name]} ${clickable ? styles.clickable : null}`}
      onClick={handleClick}
    >
      <IconImage name={name} size={60} />
    </div>
  );
}

export default Option;

const getRandomAppDecision = (): GameDecision => {
  const options: GameDecision[] = ['scissors', 'rock', 'paper'];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}