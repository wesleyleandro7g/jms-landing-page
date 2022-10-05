import { StaticImageData } from "next/image";
import { Feature } from "./feature";

export type Plan = {
  id: number;
  nome: string;
  imagem: StaticImageData;
  caracteristicas: Feature[];
};
