import { StaticImageData } from "next/image";

export type Color = {
  id: number;
  cor: string;
  hex: string;
  images: StaticImageData[];
};
