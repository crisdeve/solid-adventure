import styles from './information.module.css';
import button from '../../app/button.module.css';

type info = {
  style?: any,
  title: string,
  paragraph1: string,
  paragraph2?: string,
  buttonText?: string,
  buttonAction?: any,
  customComponent?: any,
}

export default function Information({
  title,
  paragraph1,
  paragraph2,
  buttonText,
  buttonAction,
  customComponent,
  style
}: info) {
  return (
    <div className={`${styles.information} ${style}`}>
      <span className={styles.title}>{ title }</span>
      
      {paragraph2 && 
        <span className={styles.paragraph2}>{ paragraph2 }</span>
      }

      <span className={styles.paragraph1}>{ paragraph1 }</span>
      
      {buttonText && buttonAction && 
        <button className={`${button.primary} ${styles.button}`} onClick={buttonAction}>
          {buttonText}
        </button>
      }

      {customComponent &&
        customComponent
      }
    </div>
  )
}
