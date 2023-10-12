'use client'
import Image from "next/image";
import styles from "./header.module.css";
import { useSelector } from "@/lib/redux";
import { selectScore } from "@/lib/redux/slices/gameSlice";


function Header() {
  const score = useSelector(selectScore)
  return (
    <header className={styles.header}>
      <Image priority src="images/logo.svg" alt="game logo" width={180} height={100} />
      <div className={styles.score}>
        <span>SCORE</span>
        {score}
      </div>
    </header>
  )
}

export default Header