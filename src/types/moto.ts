import { Color } from "./color";
import { Plan } from "./plan";

export type Moto = {
  id: number;
  nome: string;
  motor: string;
  cilindrada: string;
  transmissao: string;
  partida: string;
  freios: string;
  cores: Color[];
  planos: Plan[];
};
