import styles from './playlist.module.css';
import { PiMusicNotesPlus } from "react-icons/pi";
import button from '../../app/button.module.css';

export default function SpotifyPlaylist() {
  const url = 'https://open.spotify.com/playlist/7ENnnwYlu8kHaEXcWD0C30?si=b1520d6af49b49bc&pt=10c72f17ed09ac7a67328c87023c3192'
  
  const addPlayList = () => {
    location.href = url;
  }

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.playlist}
        src="https://open.spotify.com/embed/playlist/7ENnnwYlu8kHaEXcWD0C30?utm_source=generator&theme=0"
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
