import Image, { StaticImageData } from 'next/image';
import styles from './collage.module.css';

type imagesType = {
  images: StaticImageData[]
}

export default function CollageSimple({ images = [] }: imagesType) {
  if (images.length === 0) return 'No Photos'

  return (
    <section className={`${styles.collage} ${styles['collage-simple']}`}>
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
    </section>
  )
}
