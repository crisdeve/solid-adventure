import styles from './tree.module.css';
import treeSvg from '../../assets/principal-tree-wedding-bg0.svg'
import Image from 'next/image';

export default function TreeImage() {
  return (
    <div className={styles['tree-wrapper']}>
      <picture className={styles.tree}>
        <Image
          className={styles.image}
          src={treeSvg}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </picture>
    </div>
  )
}