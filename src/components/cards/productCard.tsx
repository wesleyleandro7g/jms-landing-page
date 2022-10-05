import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string | StaticImageData;
  viewGridMode: boolean;
  navigate: () => void;
}

export function ProductCard(props: ProductCardProps) {
  return (
    <div
      onClick={props.navigate}
      className={`
          flex
          ${props.viewGridMode && "flex-col"}
          w-full
          ${props.viewGridMode && "max-w-[250px]"}
          ${props.viewGridMode ? "gap-2" : "gap-4"}
          p-4
          rounded-lg
          bg-white
          shadow-sm
          hover:shadow-md
        `}
    >
      <div
        className={`
            ${!props.viewGridMode && "w-2/5"} w-full h-24 relative
          `}
      >
        <Image
          src={props.image}
          layout="fill"
          objectFit="contain"
          alt={`Imagem da motocicleta ${props.name}`}
        />
      </div>
      <div
        className={`
            flex
            flex-col
            ${props.viewGridMode ? "justify-center" : "justify-between"}
            ${props.viewGridMode ? "items-center" : "items-start"}
            ${props.viewGridMode ? "text-center" : "text-start"}
          `}
      >
        <h1 className="text-base text-gray-800 font-semibold">{props.name}</h1>
        <h3 className="text-xl text-gray-800 font-normal">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          }).format(props.price)}
        </h3>
      </div>
    </div>
  );
}
