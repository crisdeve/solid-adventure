"use client"
import { useEffect, useRef, useState } from 'react';
import styles from './header.module.css';
import song from '../../assets/snow-otb.mp3';

export default function Header() {
  const audioRef: any = useRef(null);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const attemptPlay = () => {
      setTouch(true)
      document.removeEventListener('touchstart', attemptPlay);
    };

    document.addEventListener('touchstart', attemptPlay);

    return () => {
      document.removeEventListener('touchstart', attemptPlay);
    };
  }, []);

  useEffect(() => {
    if (touch === true) {
      console.log('touch screen');
      audioRef.current.muted = false;
      audioRef.current.play();
    }
  }, [touch]);
  
  return (
    <header className={styles.header}>
      <audio controls autoPlay={true} loop ref={audioRef}>
        <source src={song} type="audio/mp3"/>
        Your browser does not support the audio element.
      </audio>

      <iframe src={song} allow="autoplay" id="iframeAudio">
      </iframe> 
    </header>
  )
}
 