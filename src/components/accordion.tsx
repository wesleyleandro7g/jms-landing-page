import Image from "next/image";
import React from "react";

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
    <div className="w-full p-4 text-start rounded-lg duration-300 bg-black-800">
      <div className="flex justify-between items-center">
        <button
          onClick={toggleAccordion}
          className="
              w-full
              border-none
              outline-none
              text-base
              font-semibold
              text-start
              cursor-pointer
              text-white
              bg-transparent
            "
        >
          {props.title}
        </button>
        <Image
          height={20}
          id={`icon-[${props.id}]`}
          src={arrow}
          alt="arrow-icon"
          className="origin-center -rotate-90 duration-300"
        />
      </div>
      <div id={props.id} className="hidden bg-transparent overflow-hidden mt-4">
        <p className="text-sm text-white md:text-base">{props.description}</p>
      </div>
    </div>
  );
}
