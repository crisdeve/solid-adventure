import { MdOutlineImageNotSupported } from "react-icons/md"
import styles from './not-support.module.css'

export default function NotSupport() {
  
  return (
    <div className={styles.wrapper}>
      <h1>D & C ❤️</h1>
      
      <div className={styles.message}>
        <p>
          <MdOutlineImageNotSupported />
          Nuestra no soporta este tamaño de pantallas.
        </p>
        <p>¡Intenta con tu celular!</p>
      </div>
    </div>
  )
}