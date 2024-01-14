'use client'
import Information from '../information';
import SpotifyPlaylist from '../playlist';
import styles from './reception.module.css';

const weddingInfo = {
  city: 'Cúcuta',
  weddingPlace: 'Les extendemos una cálida invitación a unirse a nosotros en la solemnidad y amor de nuestra ceremonia en la Eucaristia. Esperamos compartir este sagrado momento con ustedes y recibir sus bendiciones en nuestro camino juntos.',
  weddingAddress: 'Parroquia Sagrado Corazón de Jesús, Calle 9 #10E-11',
  weddingMaps: 'https://maps.app.goo.gl/9jesJUEU8zEvM1Hj9?g_st=iw',
  weddingTime: '10:00AM',
  receptionPlace: 'Con la bendición de Dios en nuestros corazones, nos gustaria recibirlos para celebrar juntos este día especial con buena comida, risas y gratitud por el amor que nos rodea.',
  receptionAddress: 'Restaurante EPICCO, Calle 17 #2E-41',
  receptionMaps: 'https://maps.app.goo.gl/rvqi5ux4BBiRgE5t6?g_st=iw',
  receptionTime: '12:00PM',
  dressCode: 'La consigna es comodidad y color tropical. Súmense a la alegría de nuestro día vistiendo colores vibrantes y prendas frescas. ¡Queremos verlos cómodos y radiantes mientras celebramos en nuestro paraíso de amor!',
  musicRecommendation: '¡Queridos amigos y familia! Su buen gusto musical es invaluable. Ayúdennos a crear la banda sonora perfecta para nuestro día especial en esta lista de Spotify. Cuál es esa canción que no puede faltar en nuestra celebración? ¡Esperamos sus sugerencias para llenar nuestro día de ritmo y alegría!',
  giftMessage: 'Su amor y buenos deseos son el mejor regalo que podríamos recibir. Si desean contribuir, estaremos agradecidos. ¡Cada gesto cuenta y nos ayuda a construir nuestro futuro juntos!',
  giftMode: '¡Lluvia de sobres!',
}

export default function ReceptionAndWedding() {
  
  const onClickMapCeremony = () => {
    location.href = weddingInfo.weddingMaps;
  }

  const onClickMapReception = () => {
    location.href = weddingInfo.receptionMaps;
  }

  return (
    <section className={styles.reception}>
      <div className={styles['reception-wrapper']}>
        <h2>{weddingInfo.city}</h2>
        
        <Information
          style={styles.reception1}
          title={weddingInfo.weddingTime}
          paragraph1={weddingInfo.weddingPlace}
          paragraph2={weddingInfo.weddingAddress}
          buttonText={'Cómo llegar'}
          buttonAction={onClickMapCeremony}
        />

        <Information
          style={styles.reception2}
          title={weddingInfo.receptionTime}
          paragraph1={weddingInfo.receptionPlace}
          paragraph2={weddingInfo.receptionAddress}
          buttonText={'Cómo llegar'}
          buttonAction={onClickMapReception}
        />

        <Information
          style={styles.reception2}
          title={'Código de vestido'}
          paragraph1={weddingInfo.dressCode}
        />

        <Information
          style={styles.reception2}
          title={'Música'}
          paragraph1={weddingInfo.musicRecommendation}
          customComponent={<SpotifyPlaylist />}
        />

        <Information
          style={styles.reception2}
          title={'Mesa de regalos'}
          paragraph1={weddingInfo.giftMessage}
          paragraph2={weddingInfo.giftMode}
        />
      </div>
    </section>
  )
}
