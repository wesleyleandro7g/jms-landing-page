import { InputHTMLAttributes } from "react";
import styles from "../styles/input.module.css";

type InputRangeProps = InputHTMLAttributes<HTMLInputElement>;

export function InputRange(props: InputRangeProps) {
  return <input className={styles.inputRange} type="range" {...props} />;
}
