import React from "react";
import Image from "next/image";

import styles from "../styles/card.module.css";

interface CardProps {
  image: string;
  title: string;
  titleSpan?: string;
  description: string;
}

export function Card(props: CardProps) {
  return (
    <div className={styles.container}>
      <Image src={props.image} className={styles.image} />
      <h3>
        {props.title} <span>{props.titleSpan}</span>
      </h3>
      <p>{props.description}</p>
    </div>
  );
}
