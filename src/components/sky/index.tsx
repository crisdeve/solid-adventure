'use client'
import './sky.css'

type Props = {
  children?: React.ReactNode;
  styles?: any
};

export default function SkyStars({ children, styles }: Props) {
  return (
    <main className={styles}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>
      {children}
    </main>
  )
}
