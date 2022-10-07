import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";

import CG_160_Start_Azul_FD from "/public/images/motos/CG_160_START/CG_160_Start_Azul_FD.png";
import CG_160_Start_Azul_LA from "/public/images/motos/CG_160_START/CG_160_Start_Azul_LA.png";
import CG_160_Start_Azul_TD from "/public/images/motos/CG_160_START/CG_160_Start_Azul_TD.png";
import CG_160_Start_Azul_TE from "/public/images/motos/CG_160_START/CG_160_Start_Azul_TE.png";
import CG_160_Start_Preta_FD from "/public/images/motos/CG_160_START/CG_160_Start_Preta_FD.png";
import CG_160_Start_Preta_LA from "/public/images/motos/CG_160_START/CG_160_Start_Preta_LA.png";
import CG_160_Start_Preta_TD from "/public/images/motos/CG_160_START/CG_160_Start_Preta_TD.png";
import CG_160_Start_Preta_TE from "/public/images/motos/CG_160_START/CG_160_Start_Preta_TE.png";
import CG_160_Start_Vermelha_FD from "/public/images/motos/CG_160_START/CG_160_Start_Vermelha_FD.png";
import CG_160_Start_Vermelha_LA from "/public/images/motos/CG_160_START/CG_160_Start_Vermelha_LA.png";
import CG_160_Start_Vermelha_TD from "/public/images/motos/CG_160_START/CG_160_Start_Vermelha_TD.png";
import CG_160_Start_Vermelha_TE from "/public/images/motos/CG_160_START/CG_160_Start_Vermelha_TE.png";

export const CG_160_START: Moto = {
  id: "4d674158-b340-45d9-a2c2-a903ecfd64ab",
  nome: "CG 160 START",
  motor: "OHC, Monocilíndrico, 4 tempos, arrefecido a ar",
  cilindrada: "162,7 cc",
  transmissao: "5 velocidades",
  partida: "Elétrico",
  freios: "A tambor / 130 mm",
  cores: [
    {
      id: "01cc93a1-80fe-430c-ba3e-a1f7d6cfe78b",
      cor: "Azul",
      hex: "#2e31a7",
      images: [
        CG_160_Start_Azul_LA,
        CG_160_Start_Azul_FD,
        CG_160_Start_Azul_TD,
        CG_160_Start_Azul_TE,
      ],
    },
    {
      id: "fee7141e-c476-4623-aa39-b3a6abaf9515",
      cor: "Preto",
      hex: "#000",
      images: [
        CG_160_Start_Preta_LA,
        CG_160_Start_Preta_FD,
        CG_160_Start_Preta_TD,
        CG_160_Start_Preta_TE,
      ],
    },
    {
      id: "fd507ac2-1e80-42d6-a2c7-0d04f45cccb4",
      cor: "Vermelho",
      hex: "#de3035",
      images: [
        CG_160_Start_Vermelha_LA,
        CG_160_Start_Vermelha_FD,
        CG_160_Start_Vermelha_TD,
        CG_160_Start_Vermelha_TE,
      ],
    },
  ],
  planos: [
    {
      id: "c4c58681-0a64-4966-a24d-b5d8e62229b5",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "2382a25e-4c54-46cf-97fe-465dc4b3a22f",
          parcelas: 80,
          valor: 229.16,
          seguro: 5.29,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 14102,
        },
        {
          id: "b5f1d77c-de5a-46ef-8312-2b55f4e5c3d6",
          parcelas: 48,
          valor: 368.71,
          seguro: 5.32,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 14102,
        },
        {
          id: "10cebf13-c460-4a3b-b754-51f52e12a557",
          parcelas: 25,
          valor: 691,
          seguro: 4.99,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 14102,
        },
        {
          id: "68b415d9-5647-40e9-a99d-c7c73bcad309",
          parcelas: 12,
          valor: 1427.83,
          seguro: 4.94,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 14102,
        },
      ],
    },
    {
      id: "a42ae4a7-7ec5-4b02-9689-931500fc0184",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "53490667-ac38-4166-a996-84a2dea74c32",
          parcelas: 80,
          valor: 249.78,
          seguro: 5.77,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 14102,
        },
        {
          id: "3ba87fd2-0352-41fb-ae07-1620aef3feb6",
          parcelas: 48,
          valor: 401.89,
          seguro: 5.8,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 14102,
        },
        {
          id: "05b1c656-0ec2-40ed-91cb-0bbdf54f8ed8",
          parcelas: 25,
          valor: 753.19,
          seguro: 5.43,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 14102,
        },
      ],
    },
  ],
};
