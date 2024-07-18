import styles from './playlist.module.css';
import { PiMusicNotesPlus } from "react-icons/pi";
import button from '../../app/button.module.css';

export default function SpotifyPlaylist() {
  const url = 'https://open.spotify.com/playlist/6LYKzwPpryvo3zIEO03rIr?si=4453fa6858ef4520&pt=413c6fe4d1c353973e4718b3205e03b3'
  
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
