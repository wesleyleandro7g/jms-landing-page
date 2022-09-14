import React from "react";

import styles from "../styles/button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CallToAction(props: ButtonProps) {
  return <button className={styles.callToAction} {...props} />;
}
