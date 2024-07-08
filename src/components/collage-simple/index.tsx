'use client'
import Image, { StaticImageData } from 'next/image';
import styles from './collage.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

type imagesType = {
  images: StaticImageData[]
}

gsap.registerPlugin(ScrollTrigger)

export default function CollageSimple({ images = [] }: imagesType) {
  const scrollable = useRef(null);
  const wrapper = useRef(null);

  useGSAP(() => {
    let pinWrapWidth = 1300;
    let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
    gsap.to(".scrollable", {
      scrollTrigger: {
        scroller: document.documentElement,
        scrub: true,
        trigger: ".scrollable",
        pin: true,
        start: 'top top',
        end: pinWrapWidth
      },
      x: -horizontalScrollLength,
      ease: "none"
    });

  }, { scope: wrapper })

  if (images.length === 0) return 'No Photos'

  return (
    <section ref={wrapper} className={`${styles.wrapper}`}>
      <div ref={scrollable} className={`scrollable ${styles.scrollable}`}>
        {images.map((imageUrl, i) => (
          <Image
            key={i}
            className={styles.tree}
            src={imageUrl}
            alt={`Collage image : ${i}`}
            width={500}
            height={400}
          />
        ))}
      </div>
    </section>
  )
}
