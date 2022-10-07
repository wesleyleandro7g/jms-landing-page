import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";

import CG160Fan_Prata_LA from "/public/images/motos/CG_160_FAN/CG160Fan_Prata_LA.png";
import CG160Fan_Prata_FD_dir from "/public/images/motos/CG_160_FAN/CG160Fan_Prata_FD_dir.png";
import CG160Fan_Prata_TD_dir from "/public/images/motos/CG_160_FAN/CG160Fan_Prata_TD_dir.png";
import CG160Fan_Prata_TD_esq from "/public/images/motos/CG_160_FAN/CG160Fan_Prata_TD_esq.png";
import CG160Fan_Preta_LA from "/public/images/motos/CG_160_FAN/CG160Fan_Preta_LA.png";
import CG160Fan_Preta_FD_dir from "/public/images/motos/CG_160_FAN/CG160Fan_Preta_FD_dir.png";
import CG160Fan_Preta_TD_dir from "/public/images/motos/CG_160_FAN/CG160Fan_Preta_TD_dir.png";
import CG160Fan_Preta_TD_esq from "/public/images/motos/CG_160_FAN/CG160Fan_Preta_TD_esq.png";
import CG160Fan_Vermelha_LA from "/public/images/motos/CG_160_FAN/CG160Fan_Vermelha_LA.png";
import CG160Fan_Vermelha_FD_esq from "/public/images/motos/CG_160_FAN/CG160Fan_Vermelha_FD_esq.png";
import CG160Fan_Vermelha_TD_dir from "/public/images/motos/CG_160_FAN/CG160Fan_Vermelha_TD_dir.png";
import CG160Fan_Vermelha_TD_esq from "/public/images/motos/CG_160_FAN/CG160Fan_Vermelha_TD_esq.png";

export const cg160fan: Moto = {
  id: "63e3d92c-ec9f-449c-bc1d-d63d524a48d1",
  nome: "CG 160 FAN ESDI",
  motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
  cilindrada: "162,7 cc",
  transmissao: "5 velocidades",
  partida: "Elétrico",
  freios:
    "Freio Dianteiro/Diâmetro: A disco / 240 mm; Freio Traseiro/Diâmetro: A tambor / 130 mm",
  cores: [
    {
      id: "9f87e8e4-cf49-41ab-b92e-37373233398e",
      cor: "Prata Metálico",
      hex: "#d0d0d2",
      images: [
        CG160Fan_Prata_LA,
        CG160Fan_Prata_FD_dir,
        CG160Fan_Prata_TD_dir,
        CG160Fan_Prata_TD_esq,
      ],
    },
    {
      id: "481b8c99-c965-41f0-b628-c58a231050f5",
      cor: "Preto",
      hex: "#000",
      images: [
        CG160Fan_Preta_LA,
        CG160Fan_Preta_FD_dir,
        CG160Fan_Preta_TD_dir,
        CG160Fan_Preta_TD_esq,
      ],
    },
    {
      id: "47c63ab7-2818-41cf-b8ae-206b5df04830",
      cor: "Vermelho",
      hex: "#de3035",
      images: [
        CG160Fan_Vermelha_LA,
        CG160Fan_Vermelha_FD_esq,
        CG160Fan_Vermelha_TD_dir,
        CG160Fan_Vermelha_TD_esq,
      ],
    },
  ],
  planos: [
    {
      id: "6f10bcc9-cf39-404e-90eb-869e1c16a2ef",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "4bab1e87-6981-439b-ac6b-1602b3f8883f",
          parcelas: 80,
          valor: 250.74,
          seguro: 5.79,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 15430,
        },
        {
          id: "f9b7ddee-f74f-47e5-8413-de94e750c564",
          parcelas: 48,
          valor: 403.43,
          seguro: 5.82,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 15430,
        },
        {
          id: "b0cdc4c3-3002-44fa-a952-76c76531dcda",
          parcelas: 25,
          valor: 756.07,
          seguro: 5.46,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 15430,
        },
        {
          id: "0587f886-857f-4632-88ff-b00ecb952a6a",
          parcelas: 12,
          valor: 1562.29,
          seguro: 5.41,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 15430,
        },
      ],
    },
    {
      id: "c4daa80f-b35d-4249-b7e9-649fe0e323b7",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "b08d2b41-e2d0-493d-b310-29969cc4fe6d",
          parcelas: 80,
          valor: 273.3,
          seguro: 6.32,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 15430,
        },
        {
          id: "37b924d4-5e7f-4168-81aa-a73cbfd7308c",
          parcelas: 48,
          valor: 439.74,
          seguro: 6.35,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 15430,
        },
        {
          id: "ab2ad92c-f4fb-4971-a1e1-039dee8f2389",
          parcelas: 25,
          valor: 824.12,
          seguro: 5.94,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 15430,
        },
      ],
    },
  ],
};
