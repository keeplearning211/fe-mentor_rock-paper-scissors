import Image from "next/image";
import styles from "./header.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <Image src="images/logo.svg" alt="game logo" width={180} height={100} />
      <div className={styles.score}>
        <span>SCORE</span>
        12
      </div>
    </header>
  )
}

export default Header