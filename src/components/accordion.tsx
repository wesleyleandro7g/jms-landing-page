import Image from "next/image";
import React from "react";

import styles from "../styles/accordion.module.css";
import arrow from "../../public/assets/arrow-red.svg";

interface AccordionProps {
  id: string;
  title: string;
  description: string;
}

export function Accordion(props: AccordionProps) {
  function toggleAccordion() {
    const element = document.getElementById(props.id);
    const icon = document.getElementById(`icon-[${props.id}]`);

    if (element && icon) {
      if (element.style.display === "block") {
        element.style.display = "none";
        icon.style.transform = "rotate(-90deg)";
      } else {
        element.style.display = "block";
        icon.style.transform = "rotate(0deg)";
      }
    }
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.buttonWrapper}>
        <button onClick={toggleAccordion}>{props.title}</button>
        <Image
          height={20}
          id={`icon-[${props.id}]`}
          src={arrow}
          className={styles.arrowIcon}
        />
      </div>
      <div id={props.id} className={styles.panel}>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
