import { MdOutlineImageNotSupported } from "react-icons/md"
import styles from './not-support.module.css'

export default function NotSupport() {
  
  return (
    <div className={styles.wrapper}>
      <h1>D & G ❤️</h1>
      
      <div className={styles.message}>
        <p>
          <MdOutlineImageNotSupported />
          {"We don't have support to this device type."}
        </p>
        <p>Please, Try from your cellphone</p>
      </div>
    </div>
  )
}