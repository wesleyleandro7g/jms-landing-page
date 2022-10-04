import Image from "next/image";

import biz from "../../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";

import { PrimaryButton } from "../button";

export function MotoCard() {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        w-full
        min-w-[320px]
        max-w-[540px]
        md:min-w-[220px]
        md:max-w-[450px]
        p-2
        gap-4
        md:gap-2
        rounded-lg
        bg-white
      "
    >
      <h1 className="text-lg font-semibold text-black-800">Biz 110i</h1>
      <Image src={biz} layout="responsive" alt="Imagem da motocicleta" />
      <div>
        <p className="text-sm text-black-800">Parcelas mensais a partir de</p>
        <h5 className="text-3xl text-black-800 font-semibold">R$ 155,48</h5>
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
