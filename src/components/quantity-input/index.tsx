'use client'
import { createRef } from "react"
import styles from './quantity.module.css'
import { HiOutlinePlus } from "react-icons/hi2"
import { HiOutlineMinusSm } from "react-icons/hi"

type inputNumber = {
  step: number,
  max: number,
  min: number,
	count: number,
	setCount: any,
}

export default function CustomNumberInput({ step, max, min, count, setCount }: inputNumber) {
	const input: any = createRef();

	function handleOnInput({ target }: { target: any }) {
		setCount(target.value);
	}

	function handleOnUpClick() {
		input.current.stepUp();
		setCount(input.current.value);
	}

	function handleOnDownClick() {
		input.current.stepDown();
		setCount(input.current.value);
	}

	return (
		<div className={styles.quantity}>
			<input
        className={styles.input}
				type="number"
				id="tf"
				onInput={handleOnInput}
				ref={input}
				step={step}
				value={count}
        max={max}
        min={min}
			/>
		
      <span
        className={`${styles.button} ${styles.minus}`}
        id="low"
        onClick={handleOnDownClick}
      >
        <HiOutlineMinusSm />
      </span>

      <span
        className={`${styles.button} ${styles.plus}`}
        id="high"
        onClick={handleOnUpClick}
        
      >
        <HiOutlinePlus />
      </span>
		</div>
	);
}
