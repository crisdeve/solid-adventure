import styles from './hero.module.css';
import TreeImage from '../tree-image';

export default function Hero({ title }: { title: string }) {
  return (
    <section className={styles.hero}>
      <div className={styles.paragraph}>
        <span>
          {title}
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora ipsam, illo rerum ut accusantium dolore tempore, est fugit ex qui sequi aliquid libero facilis hic error totam porro. Saepe.
        </p>
      </div>
      <h1 className={styles.heading}>
        <span>Nuestra</span>
        <span>Boda.</span>
      </h1>
      <TreeImage />
    </section>
  )
}