import Image from "next/image";

import biz from "../../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";

import { PrimaryButton } from "../button";

import styles from "../../styles/motorcycleCard.module.css";

export function MotoCard() {
  return (
    <div className={styles.container}>
      <h1>Biz 110i</h1>
      <Image src={biz} layout="responsive" />
      <div>
        <p>Parcelas mensais a partir de</p>
        <h5>R$ 155,48</h5>
      </div>
      <PrimaryButton
        style={{
          backgroundColor: "transparent",
          border: "1px solid #CD0707",
          color: "#CD0707",
        }}
      >
        SIMULE AGORA
      </PrimaryButton>
    </div>
  );
}
