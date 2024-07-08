import styles from './playlist.module.css';
import { PiMusicNotesPlus } from "react-icons/pi";
import button from '../../app/button.module.css';

export default function SpotifyPlaylist() {
  const url = 'https://open.spotify.com/playlist/7ENnnwYlu8kHaEXcWD0C30?si=9f1c272a90574f5a&pt=acd4a4000fe75093c2ad2bb722146b51'
  
  const addPlayList = () => {
    location.href = url;
  }

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.playlist}
        src="https://open.spotify.com/embed/playlist/6LYKzwPpryvo3zIEO03rIr?utm_source=generator&theme=0"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      
      <button onClick={addPlayList} className={`${styles.button} ${button.primary}`}>
        Agrega una canción
        <PiMusicNotesPlus />
      </button>
    </div>
  )
}
