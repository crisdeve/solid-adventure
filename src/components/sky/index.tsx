'use client'
import { useEffect, useRef } from 'react';
import './sky.css'

type Props = {
  children?: React.ReactNode;
  styles?: any
};

export default function SkyStars({ children, styles }: Props) {
  const scrollable = useRef(null)

  useEffect(() => {
    (
      async () => {
        const locomotiveScroll = (await import('locomotive-scroll')).default

        new locomotiveScroll({
          el: document.documentElement,
          smooth: true,
          resetNativeScroll: true
        });
      }
    )()
  }, [])

  return (
    <main ref={scrollable} data-scroll-container className={styles}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      {children}
    </main>
  )
}
