import { StaticImageData } from "next/image";

export type Color = {
  id: string;
  cor: string;
  hex: string;
  images: StaticImageData[];
};
