import { Moto } from "../types/moto";
import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";

import BIZ_110_BRANCA_LA from "/public/images/motos/BIZ_110/BIZ_110_BRANCA_LA.png";
import BIZ_110_BRANCA_FD from "/public/images/motos/BIZ_110/BIZ_110_BRANCA_FD.png";
import BIZ_110_BRANCA_TD from "/public/images/motos/BIZ_110/BIZ_110_BRANCA_TD.png";
import BIZ_110_CINZA_LA from "/public/images/motos/BIZ_110/BIZ_110_CINZA_LA.png";
import BIZ_110_CINZA_FD from "/public/images/motos/BIZ_110/BIZ_110_CINZA_FD.png";
import BIZ_110_CINZA_TD from "/public/images/motos/BIZ_110/BIZ_110_CINZA_TD.png";
import BIZ_110_VERMELHA_LA from "/public/images/motos/BIZ_110/BIZ_110_VERMELHA_LA.png";
import BIZ_110_VERMELHA_FD from "/public/images/motos/BIZ_110/BIZ_110_VERMELHA_FD.png";
import BIZ_110_VERMELHA_TD from "/public/images/motos/BIZ_110/BIZ_110_VERMELHA_TD.png";

export const motos: Moto[] = [
  {
    id: 0,
    nome: "Biz 110i",
    motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
    cilindrada: "109,1 cc",
    transmissao: "4 velocidades",
    partida: "Pedal",
    freios: "A tambor / 130mm",
    cores: [
      {
        id: 0,
        cor: "Branco",
        hex: "#fff",
        images: [BIZ_110_BRANCA_LA, BIZ_110_BRANCA_FD, BIZ_110_BRANCA_TD],
      },
      {
        id: 1,
        cor: "Cinza Metálico",
        hex: "#383838",
        images: [BIZ_110_CINZA_LA, BIZ_110_CINZA_FD, BIZ_110_CINZA_TD],
      },
      {
        id: 2,
        cor: "Vermelho Perolizado",
        hex: "#BC161A",
        images: [BIZ_110_VERMELHA_LA, BIZ_110_VERMELHA_FD, BIZ_110_VERMELHA_TD],
      },
    ],
    planos: [
      {
        id: 0,
        nome: "Vou de Honda",
        imagem: VoudeHonda,
        caracteristicas: [
          {
            id: 0,
            parcelas: 80,
            label: "80x",
            valor: 185.64,
            seguro: 4.29,
            contemplacoes: 12,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 1,
            parcelas: 48,
            label: "48x",
            valor: 298.69,
            seguro: 4.31,
            contemplacoes: 20,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 2,
            parcelas: 25,
            label: "25x",
            valor: 559.78,
            seguro: 4.04,
            contemplacoes: 26,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 3,
            parcelas: 12,
            label: "12x",
            valor: 1156.68,
            seguro: 4.01,
            contemplacoes: 26,
            documentacao: false,
            credito: 11424,
          },
        ],
      },
      {
        id: 1,
        nome: "Vou de Honda Mais",
        imagem: VoudeHondaMais,
        caracteristicas: [
          {
            id: 0,
            parcelas: 80,
            label: "80x",
            valor: 202.35,
            seguro: 4.67,
            contemplacoes: 12,
            documentacao: true,
            credito: 11424,
          },
          {
            id: 1,
            parcelas: 48,
            label: "48x",
            valor: 325.57,
            seguro: 4.7,
            contemplacoes: 20,
            documentacao: true,
            credito: 11424,
          },
          {
            id: 2,
            parcelas: 25,
            label: "25x",
            valor: 610.16,
            seguro: 4.4,
            contemplacoes: 26,
            documentacao: true,
            credito: 11424,
          },
        ],
      },
    ],
  },
];
