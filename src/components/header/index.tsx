"use client"
import { useEffect, useRef } from 'react';
import styles from './header.module.css';
import song from '@/assets/lover.mp3';

export default function Header() {
  const vidRef: any = useRef();

  useEffect(() => { vidRef.current?.play() }, []);
  
  return (
    <header className={styles.header}>
      <audio controls autoPlay={true} loop ref={vidRef}>
        <source src={song} type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
    </header>
  )
}
