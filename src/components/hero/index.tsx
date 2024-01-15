import styles from './hero.module.css';
import TreeImage from '../tree-image';

export default function Hero({ title }: { title: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.paragraph}>
        <span>
          {title}
        </span>
        <p>
        Tras 6 años de risas, complicidades y amor, decidimos dar el siguiente gran paso. ¡Estamos emocionados de invitarlos a celebrar nuestra unión en este día tan especial! Acompáñennos mientras comenzamos este nuevo capítulo juntos. Su presencia hará este momento aún más memorable.
        </p>
      </div>
      <h1 className={styles.heading}>
        <span>Nuestra</span>
        <span>Boda.</span>
      </h1>
      <TreeImage />
    </section>
  )
}