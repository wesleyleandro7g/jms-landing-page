import React from "react";
import Image from "next/image";
import Link from "next/link";

import biz from "../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";

import styles from "../styles/motoSmallCard.module.css";

export function MotoSmallCard() {
  return (
    <Link href="motos/1">
      <div className={styles.container}>
        <Image src={biz} layout="responsive" />
        <div>
          <h1>Pop 110i</h1>
          <h3>R$ 155,48</h3>
        </div>
      </div>
    </Link>
  );
}
