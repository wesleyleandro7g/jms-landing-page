import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(1);

  function handlePrev() {
    const nextIndex = index - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
  }

  function handleNext() {
    setIndex((index + 1) % images.length);
  }

  return (
    <div className="relative">
      <div className="relative duration-700 ease-in-out">
        <Image
          src={images[index]}
          layout="responsive"
          className="absolute z-20 object-contain w-full h-full"
          alt="Imagem da motocicleta"
        />
      </div>

      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/30 group-hover:bg-primary/50 group-focus:ring-2 group-focus:ring-primary group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary/30 group-hover:bg-primary/50 group-focus:ring-2 group-focus:ring-primary group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
