import Information from '../information';
import styles from './reception.module.css';

type infoWedding = {
  city: string,
  weddingPlace: string,
  weddingTime: string,
  receptionPlace: string,
  receptionTime: string,
}

export default function ReceptionAndWedding({
  city,
  weddingTime,
  weddingPlace,
  receptionPlace,
  receptionTime
}: infoWedding) {
  return (
    <section className={styles.reception}>
      <span className={styles['reception-title']}>Lugar.</span>

      <div className={styles['reception-wrapper']}>
        <h2>{city}</h2>
        
        <Information
          style={styles.reception1}
          title={weddingTime}
          paragraph1={weddingPlace}
          paragraph2={'Ceremonia'}
        />

        <Information
          style={styles.reception2}
          title={receptionTime}
          paragraph1={receptionPlace}
          paragraph2={'Recepción'}
        />

      </div>
    </section>
  )
}
