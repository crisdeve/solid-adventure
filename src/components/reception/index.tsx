'use client'
import Information from '../information';
import styles from './reception.module.css';

type infoWedding = {
  city: string,
  weddingPlace: string,
  weddingTime: string,
  receptionPlace: string,
  receptionTime: string,
}

const weddingInfo = {
  city: 'Cucuta',
  weddingPlace: 'Inciamos en la Iglesia Sagrado Corazón de Jesús, comparte con nosotros este momento',
  weddingTime: '10:00AM',
  receptionPlace: 'En este día, comparte con nosotros en el Restaurante EPICCO',
  receptionTime: '1:00PM',
  dressCode: '1:00PM',
  musicRecommendation: '1:00PM',
  giftTable: '1:00PM',
}

export default function ReceptionAndWedding() {
  
  const onClickMapCeremony = () => {
    console.log('ok action')
  }

  return (
    <section className={styles.reception}>
      <div className={styles['reception-wrapper']}>
        <h2>{weddingInfo.city}</h2>
        
        <Information
          style={styles.reception1}
          title={weddingInfo.weddingTime}
          paragraph1={weddingInfo.weddingPlace}
          paragraph2={'Ceremonia'}
          buttonText={'Cómo llegar'}
          buttonAction={onClickMapCeremony}
        />

        <Information
          style={styles.reception2}
          title={weddingInfo.receptionTime}
          paragraph1={weddingInfo.receptionPlace}
          paragraph2={'Recepción'}
          buttonText={'Cómo llegar'}
          buttonAction={onClickMapCeremony}
        />

        <Information
          style={styles.reception2}
          title={'Codigo de vestido'}
          paragraph1={weddingInfo.receptionPlace}
        />

        <Information
          style={styles.reception2}
          title={'Musica'}
          paragraph1={weddingInfo.receptionPlace}
          buttonText={'Playlist Spotify'}
          buttonAction={onClickMapCeremony}
        />

        <Information
          style={styles.reception2}
          title={'Mesa de regalos'}
          paragraph1={weddingInfo.receptionPlace}
          buttonText={'Hacer transferencia'}
          buttonAction={onClickMapCeremony}
        />

      </div>
    </section>
  )
}
