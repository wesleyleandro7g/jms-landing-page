import React from "react";
import Image from "next/image";
import Link from "next/link";

import biz from "../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";

import styles from "../styles/motoSmallCard.module.css";

interface MotoSmallCardProps {
  name: string;
  price: number;
  image: string;
  viewGridMode: boolean;
}

export function MotoSmallCard(props: MotoSmallCardProps) {
  return (
    <Link href="motos/1">
      <div className={props.viewGridMode ? styles.container : styles.viewList}>
        <div className={styles.moto}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/react-image-upload-28d88.appspot.com/o/images%2FBIZ_110_VERMELHA_LATERAL.png?alt=media&token=21bcd696-4bcd-45df-b73e-74eb1979e787"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.info}>
          <h1>{props.name}</h1>
          <h3>
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(props.price)}
          </h3>
        </div>
      </div>
    </Link>
  );
}
