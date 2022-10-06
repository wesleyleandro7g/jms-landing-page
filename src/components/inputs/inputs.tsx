import { InputHTMLAttributes } from "react";
import styles from "../../styles/input.module.css";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function InputRange(props: InputProps) {
  return <input className={styles.inputRange} type="range" {...props} />;
}

export function InputRadio(props: InputProps) {
  return (
    <div>
      <input className={styles.inputRadio} type="radio" {...props} />
      <label className={styles.label} htmlFor={props.id}>
        {props.id}
      </label>
    </div>
  );
}

export function ColorSelect(props: InputProps) {
  return (
    <>
      <input type="radio" className={styles.inputColor} {...props} />
      <label
        style={{ backgroundColor: props.color }}
        className={styles.inputColorLabel}
        htmlFor={props.id}
      ></label>
    </>
  );
}
