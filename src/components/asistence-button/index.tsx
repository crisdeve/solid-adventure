'use client'
import { useState } from "react";
import CustomNumberInput from "../quantity-input";
import button from '../../app/button.module.css';
import styles from './button-assitence.module.css'
import { FiUserCheck } from "react-icons/fi";

export default function AsistenceButton({ nHost }: { nHost: number }) {
  const [confirmed, setConfirmed] = useState(nHost);

  const onClickConfirm = () => {
    const message = `
      %C2%A1Confirmamos%20nuestra%20asistencia%20con%20alegr%C3%ADa!%20Seremos%20${confirmed}%20celebrando%20junto%20a%20ustedes%20este%20d%C3%ADa%20tan%20especial.%20Gracias%20por%20incluirnos%20en%20este%20hermoso%20cap%C3%ADtulo%20de%20su%20historia%20de%20amor.
    `;

    window.open(`https://wa.me/573142661371?text=${message}`);
  }

  return (
    <div className={styles.wrapper}>
      <CustomNumberInput
        min={0}
        max={nHost}
        step={1}
        count={confirmed}
        setCount={setConfirmed}
      />

      <button
        onClick={onClickConfirm}
        className={`${button.primary} ${styles.button}`}
      >
        Confirmar asistencia
        <FiUserCheck />
      </button>
    </div>
  )
}