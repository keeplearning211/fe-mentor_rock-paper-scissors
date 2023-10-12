import Image from "next/image";
import styles from "./header.module.css";


function Header() {
  return (
    <header className={styles.header}>
      <Image src="images/logo.svg" alt="game logo" width={80} height={80} />
      <div className={styles.score}>12</div>
    </header>
  )
}

export default Header