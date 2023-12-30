import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.date}>
        <span>24</span>
        <span>/</span>
        <span>02</span>
      </div>

      <div className={styles.logo}>
        <span>D</span>
        <span>/</span>
        <span>C</span>
      </div>
    </header>
  )
}
