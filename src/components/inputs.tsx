import { InputHTMLAttributes } from "react";
import styles from "../styles/input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputRange(props: InputProps) {
  return <input className={styles.inputRange} type="range" {...props} />;
}

export function InputRadio(props: InputProps) {
  return (
    <>
      <input className={styles.inputRadio} type="radio" {...props} />
      <label className={styles.label} htmlFor={props.id}>
        {props.value}
      </label>
    </>
  );
}
