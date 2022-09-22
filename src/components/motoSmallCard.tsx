import React from "react";
import Image from "next/image";
import Link from "next/link";

import biz from "../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";

import styles from "../styles/motoSmallCard.module.css";

interface MotoSmallCardProps {
  viewGridMode: boolean;
}

export function MotoSmallCard(props: MotoSmallCardProps) {
  return (
    <Link href="motos/1">
      <div className={props.viewGridMode ? styles.container : styles.viewList}>
        <div className={styles.moto}>
          <Image src={biz} layout="responsive" />
        </div>
        <div className={styles.info}>
          <h1>Pop 110i</h1>
          <h3>R$ 155,48</h3>
        </div>
      </div>
    </Link>
  );
}
