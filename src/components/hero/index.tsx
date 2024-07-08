import styles from './hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p data-scroll data-scroll-speed='0.3' data-scroll-delay="0.2">Mariana</p>
      <h1 data-scroll data-scroll-speed='0.1' data-scroll-delay="0.4" className={styles.heading}>
        Mis 15 años
      </h1>
    </section>
  )
}