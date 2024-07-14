import styles from './assistence.module.css';

export default function Assistence({ invites }: { invites: string }) {
  return (
    <section className={styles.section}>
      <h2>{invites}</h2>
      <p>{'Por favor, confírmanos tu asistencia antes del 1 agosto. Puedes hacerlo respondiendo a este mensaje o llamando al 310-306-6840. Cada "sí" añade un destello más de alegría a la sonrisa de nuestra quinceañera. ¡Esperamos con ilusión poder contar contigo en esta noche mágica!'}</p>
    </section>
  )
}