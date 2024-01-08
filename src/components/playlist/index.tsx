import styles from './playlist.module.css';
import { PiMusicNotesPlus } from "react-icons/pi";
import button from '../../app/button.module.css';


export default function SpotifyPlaylist() {
  const url = 'https://open.spotify.com/playlist/7ENnnwYlu8kHaEXcWD0C30?si=8174102a0a6146e1&pt=bd74b842978762c749260a3d5b4e1ab4'
  
  const addPlayList = () => {
    window.open(url);
  }

  return (
    <>
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
    </>
  )
}
