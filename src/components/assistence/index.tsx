import styles from './assistence.module.css';
import button from '../../app/button.module.css';

export default function Assistence() {
  return (
    <section className={styles.section}>
      <h2>Confirmar asistencia</h2>
      <p>Confirma tu asistencia a la boda de Diana & Cristian. Da click en el boton confirmar asistencia</p>
      <button className={`${button.primary} ${styles.button}`}>Confirmar asistencia</button>
    </section>
  )
}