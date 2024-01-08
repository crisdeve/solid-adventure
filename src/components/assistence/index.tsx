import styles from './assistence.module.css';
import AsistenceButton from '../asistence-button';

export default function Assistence({ nHost }: { nHost: number }) {
  return (
    <section className={styles.section}>
      <h2>Confirmar asistencia</h2>
      <p>¡Será un honor contar con tu presencia en nuestra boda! Por favor, confírmanos si nos acompañarás en este día tan importante para nosotros. Esperamos celebrar juntos y hacer de este momento algo aún más especial con tu compañía.</p>
      <AsistenceButton nHost={nHost} />
    </section>
  )
}