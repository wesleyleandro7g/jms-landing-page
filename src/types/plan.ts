import { Feature } from "./feature";

export type Plan = {
  id: number;
  nome: string;
  imagem: string;
  caracteristicas: Feature[];
};
