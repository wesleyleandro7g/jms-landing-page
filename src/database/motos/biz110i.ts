import type { Moto } from "../../types/moto";

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

export const biz110i: Moto = {
  id: "656e912e-5e9b-4697-8e16-422b5f28447f",
  nome: "Biz 110i",
  motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
  cilindrada: "109,1 cc",
  transmissao: "4 velocidades",
  partida: "Pedal",
  freios: "A tambor / 130mm",
  cores: [
    {
      id: "5c0b8897-7c0d-46d6-9917-ad8ee357f094",
      cor: "Branca",
      hex: "#fff",
      images: [BIZ_110_BRANCA_LA, BIZ_110_BRANCA_FD, BIZ_110_BRANCA_TD],
    },
    {
      id: "f4526bcc-89be-43de-b5af-121dcb0fdc07",
      cor: "Cinza Metálico",
      hex: "#383838",
      images: [BIZ_110_CINZA_LA, BIZ_110_CINZA_FD, BIZ_110_CINZA_TD],
    },
    {
      id: "90353328-6e32-47cb-9826-97b64894e239",
      cor: "Vermelho Perolizado",
      hex: "#BC161A",
      images: [BIZ_110_VERMELHA_LA, BIZ_110_VERMELHA_FD, BIZ_110_VERMELHA_TD],
    },
  ],
  planos: [
    {
      id: "6df70e0f-f849-4e6f-827c-3adc2195a676",
      nome: "Vou de Honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "73fdff6f-85b0-4b5f-b451-1de97200159a",
          parcelas: 80,
          label: "80x",
          valor: 185.64,
          seguro: 4.29,
          contemplacoes: 12,
          documentacao: false,
          credito: 11424,
        },
        {
          id: "e98497b7-a5df-48d9-a6aa-2eee7c2c5eb8",
          parcelas: 48,
          label: "48x",
          valor: 298.69,
          seguro: 4.31,
          contemplacoes: 20,
          documentacao: false,
          credito: 11424,
        },
        {
          id: "08d6fd1c-2988-43dc-8781-4723f10dc7e1",
          parcelas: 25,
          label: "25x",
          valor: 559.78,
          seguro: 4.04,
          contemplacoes: 26,
          documentacao: false,
          credito: 11424,
        },
        {
          id: "89932dd6-f222-43f4-b6f6-f8e1235b150b",
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
      id: "28bf293a-6fd3-4fe8-8ef9-cfc5ad2dec6f",
      nome: "Vou de Honda Mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "d9d5b593-bd5b-4b16-9089-5f80cb9afd20",
          parcelas: 80,
          label: "80x",
          valor: 202.35,
          seguro: 4.67,
          contemplacoes: 12,
          documentacao: true,
          credito: 11424,
        },
        {
          id: "0211d362-a43d-4d5c-8528-6ea0133c4e4c",
          parcelas: 48,
          label: "48x",
          valor: 325.57,
          seguro: 4.7,
          contemplacoes: 20,
          documentacao: true,
          credito: 11424,
        },
        {
          id: "62483ee3-7ed3-4998-bbf2-7b12f0612a1e",
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
};
