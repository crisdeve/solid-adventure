import styles from './information.module.css';

type info = {
  style?: any,
  title: string,
  paragraph1: string,
  paragraph2: string,
}

export default function Information({ title, paragraph1, paragraph2, style }: info) {
  return (
    <div className={`${styles.information} ${style}`}>
      <span className={styles.title}>{ title }</span>
      <span className={styles.paragraph1}>{ paragraph1 }</span>
      <span className={styles.paragraph2}>{ paragraph2 }</span>
    </div>
  )
}