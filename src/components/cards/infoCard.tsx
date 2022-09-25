import React from "react";
import Image from "next/image";

interface InfoCardProps {
  image: string;
  title: string;
  titleSpan?: string;
  description: string;
}

export function InfoCard(props: InfoCardProps) {
  return (
    <div
      className="
        flex
        flex-col
        justify-center
        items-center
        text-center
        w-full
        md:max-w-[240px]
        rounded-lg
        py-6
        px-3
        bg-white
        border-y-4
        border-primary
        md:border-none
        drop-shadow-md
        hover:drop-shadow-xl
        duration-300
        gap-4
      "
    >
      <Image src={props.image} />
      <h3 className="text-lg font-semibold text-black-800 leading-5">
        {props.title} <span className="text-primary">{props.titleSpan}</span>
      </h3>
      <p className="text-base md:text-sm">{props.description}</p>
    </div>
  );
}
