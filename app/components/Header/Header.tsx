'use client'
import Image from "next/image";
import { useSelector } from "@/lib/redux";
import { selectScore } from "@/lib/redux/slices/gameSlice";
import styles from "./header.module.css";


function Header() {
  const score = useSelector(selectScore)
  return (
    <header className={styles.header}>
      <Image className={styles.logo} priority src="images/logo.svg" alt="game logo" width={163} height={100} />
      <div className={styles.score}>
        <span className={styles.text}>SCORE</span>
        <span className={styles.number}>{score}</span>
      </div>
    </header>
  )
}

export default Header