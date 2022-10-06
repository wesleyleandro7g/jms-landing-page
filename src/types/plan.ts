import { StaticImageData } from "next/image";
import { Feature } from "./feature";

export type Plan = {
  id: string;
  nome: string;
  imagem: StaticImageData;
  caracteristicas: Feature[];
};
