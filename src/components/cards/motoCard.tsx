import Image, { StaticImageData } from "next/image";

import { PrimaryButton } from "../button";

interface MotoCardProps {
  id: string;
  name: string;
  value: number;
  image: StaticImageData;
  onClick: () => void;
}

export function MotoCard(props: MotoCardProps) {
  return (
    <div className="flex flex-col justify-center w-full min-w-[320px] max-w-[540px] md:min-w-[220px] md:max-w-[450px] p-2 gap-4 md:gap-2 rounded-lg bg-white">
      <h1 className="text-lg font-semibold text-black-800">{props.name}</h1>
      <Image
        src={props.image}
        layout="responsive"
        alt="Imagem da motocicleta"
      />
      <div>
        <p className="text-sm text-black-800">Parcelas mensais a partir de</p>
        <h5 className="text-3xl text-black-800 font-semibold">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(props.value)}
        </h5>
      </div>
      <PrimaryButton
        onClick={props.onClick}
        style={{
          backgroundColor: "transparent",
          border: "1px solid #CD0707",
          color: "#CD0707",
          padding: "0.8rem 0",
        }}
      >
        SIMULE AGORA
      </PrimaryButton>
    </div>
  );
}
