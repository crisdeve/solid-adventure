'use client'
import Information from '../information';
import SpotifyPlaylist from '../playlist';
import styles from './reception.module.css';

const weddingInfo = {
  city: 'Yair Velasco & Linda Caćeres',
  weddingPlace: 'Únanse a nosotros en una sagrada eucaristía donde, envueltos en el amor de Dios y la calidez de su compañía, celebraremos el dulce paso de niña a mujer.',
  weddingAddress: 'Parroquia Santa Maria Madre De Dios, Barrio Arboleda',
  weddingMaps: 'https://g.co/kgs/5tQK9hy',
  weddingTime: '6 de Agosto, 7:00PM',
  receptionPlace: '¡La noche se iluminará con estrellas y sueños cuando nuestra querida Mariana celebre sus espléndidos quince años! Te invitamos a ser parte de este momento mágico donde la niñez se despide con una sonrisa y la juventud llega bailando!',
  receptionAddress: 'Tennis Golf Club, Salón Brisas del Pamplonita',
  receptionMaps: 'https://g.co/kgs/HfcMZU7',
  receptionTime: '18 de Agosto, 7:00PM',
  dressCode: '"Noche Estrellada" - vístete para brillar como las estrellas que adornarán nuestro cielo esa noche especial. Tu presencia será la constelación perfecta para hacer de esta celebración un universo de felicidad.',
  musicRecommendation: '¡Ey, familia y amigos! 🎵✨ Necesitamos armar la playlist más épica para nuestra fiesta. ¿Cuál es ese tema que no puede faltar? Tiren sus ideas y hagamos que esta celebración sea inolvidable. ¡A darle ritmo a la noche! 🕺💃🎉',
  giftMessage: '¡Su amor y buenos deseos son el mejor regalo que podríamos recibir!',
  giftMode: '¡Lluvia de sobres!',
}

export default function ReceptionAndWedding({ id }: { id: number }) {
  
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
          paragraph2={id === 0 ? 'Condominio Piemonte - Salón Social' : weddingInfo.receptionAddress}
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
