import React from "react";

import styles from "../styles/button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CallToAction(props: ButtonProps) {
  return (
    <button
      className="flex
        justify-center
        z-10
        items-center
        gap-2
        w-full
        md:w-auto
        rounded-lg
        px-10
        py-3
        border-none
        cursor-pointer
        bg-primary
        text-white"
      style={{ boxShadow: "0px 0px 16px 6px rgba(205,7,7,0.49)" }}
      {...props}
    />
  );
}

export function CallToActionVariant(props: ButtonProps) {
  return <button className={styles.callToActionVariant} {...props} />;
}

export function OutlinedButton(props: ButtonProps) {
  return <button className={styles.outlined} {...props} />;
}

export function WhatsAppButton(props: ButtonProps) {
  return <button className={styles.whatsApp} {...props} />;
}
