'use client'
import Information from '../information';
import SpotifyPlaylist from '../playlist';
import styles from './reception.module.css';

const weddingInfo = {
  city: 'Te esperamos !',
  weddingPlace: 'Únanse a nosotros en una sagrada eucaristía donde, envueltos en el amor de Dios y la calidez de su compañía, celebraremos el dulce paso de niña a mujer.',
  weddingAddress: 'Parroquia Barrio Arboleda',
  weddingMaps: 'https://maps.app.goo.gl/9jesJUEU8zEvM1Hj9?g_st=iw',
  weddingTime: '3:00PM',
  receptionPlace: '¡La noche se iluminará con estrellas y sueños cuando nuestra querida [Nombre] celebre sus espléndidos quince años! Te invitamos a ser parte de este momento mágico donde la niñez se despide con una sonrisa y la juventud llega bailando!',
  receptionAddress: '¡Sorpresa!',
  receptionMaps: 'https://maps.app.goo.gl/rvqi5ux4BBiRgE5t6?g_st=iw',
  receptionTime: '7:00PM',
  dressCode: '"Noche Estrellada" - vístete para brillar como las estrellas que adornarán nuestro cielo esa noche especial. Tu presencia será la constelación perfecta para hacer de esta celebración un universo de felicidad.',
  musicRecommendation: '¡Queridos amigos y familia! Su buen gusto musical es invaluable. Ayúdennos a crear la banda sonora perfecta para nuestro día especial en esta lista de Spotify. Cuál es esa canción que no puede faltar en nuestra celebración? ¡Esperamos sus sugerencias para llenar nuestro día de ritmo y alegría!',
  giftMessage: '¡Su amor y buenos deseos son el mejor regalo que podríamos recibir!',
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
          style={styles.reception1}
          title={weddingInfo.receptionTime}
          paragraph1={weddingInfo.receptionPlace}
          paragraph2={weddingInfo.receptionAddress}
          buttonText={'Cómo llegar'}
          buttonAction={onClickMapReception}
        />

        <Information
          style={styles.reception1}
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
