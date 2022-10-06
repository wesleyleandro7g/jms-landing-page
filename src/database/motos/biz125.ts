import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";

import BIZ_125_AZUL_LA from "/public/images/motos/BIZ_125/BIZ_125_AZUL_LA.png";
import BIZ_125_AZUL_FD from "/public/images/motos/BIZ_125/BIZ_125_AZUL_FD.png";
import BIZ_125_AZUL_TD from "/public/images/motos/BIZ_125/BIZ_125_AZUL_TD.png";
import BIZ_125_BRANCO_PEROLIZADO_LA from "/public/images/motos/BIZ_125/BIZ_125_BRANCO_PEROLIZADO_LA.png";
import BIZ_125_BRANCO_PEROLIZADO_FD from "/public/images/motos/BIZ_125/BIZ_125_BRANCO_PEROLIZADO_FD.png";
import BIZ_125_BRANCO_PEROLIZADO_TD from "/public/images/motos/BIZ_125/BIZ_125_BRANCO_PEROLIZADO_TD.png";
import BIZ_125_MARROM_LA from "/public/images/motos/BIZ_125/BIZ_125_MARROM_LA.png";
import BIZ_125_MARROM_FD from "/public/images/motos/BIZ_125/BIZ_125_MARROM_FD.png";
import BIZ_125_MARROM_TD from "/public/images/motos/BIZ_125/BIZ_125_MARROM_TD.png";
import BIZ_125_VERMELHA_LA from "/public/images/motos/BIZ_125/BIZ_125_VERMELHA_LA.jpg";
import BIZ_125_VERMELHA_FD from "/public/images/motos/BIZ_125/BIZ_125_VERMELHA_FD.jpg";
import BIZ_125_VERMELHA_TD from "/public/images/motos/BIZ_125/BIZ_125_VERMELHA_TD.jpg";

export const biz125: Moto = {
  id: "71613fd8-23a1-4f9a-9b38-97c275a5fb63",
  nome: "Biz 125",
  motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
  cilindrada: "124,9 cc",
  transmissao: "4 velocidades",
  partida: "Elétrico",
  freios: "A disco / 220 mm",
  cores: [
    {
      id: "555fa20f-4b34-47c1-958d-14fbafbca53e",
      cor: "Branco Perolizado",
      hex: "#fff",
      images: [
        BIZ_125_BRANCO_PEROLIZADO_LA,
        BIZ_125_BRANCO_PEROLIZADO_FD,
        BIZ_125_BRANCO_PEROLIZADO_TD,
      ],
    },
    {
      id: "3e51c544-38e3-4167-bbde-4db0fac6a02c",
      cor: "Azul e Branco",
      hex: "#3b4e85",
      images: [BIZ_125_AZUL_LA, BIZ_125_AZUL_FD, BIZ_125_AZUL_TD],
    },
    {
      id: "3f4bed70-707e-4ca3-8b4f-12e3543bf6e7",
      cor: "Marrom Perolizado",
      hex: "#7b3f30",
      images: [BIZ_125_MARROM_LA, BIZ_125_MARROM_FD, BIZ_125_MARROM_TD],
    },
    {
      id: "e425638a-f04a-4cdb-9750-05036d97f51f",
      cor: "Vermelho",
      hex: "#de3035",
      images: [BIZ_125_VERMELHA_LA, BIZ_125_VERMELHA_FD, BIZ_125_VERMELHA_TD],
    },
  ],
  planos: [
    {
      id: "176b7338-229a-4079-859d-e122c640d4c3",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "79aed1af-a463-430d-a3bb-8106bd38f264",
          parcelas: 80,
          valor: 237.23,
          seguro: 5.48,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 14599,
        },
        {
          id: "f185be73-6e85-426e-bf9c-23d2771907b1",
          parcelas: 48,
          valor: 381.7,
          seguro: 5.51,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 14599,
        },
        {
          id: "623e6262-5d0c-404b-91c5-b5425309686b",
          parcelas: 25,
          valor: 715.35,
          seguro: 5.16,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 14599,
        },
        {
          id: "0235f240-8594-4578-9308-a51f2f2b3e9f",
          parcelas: 12,
          valor: 1478.15,
          seguro: 5.12,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 14599,
        },
      ],
    },
    {
      id: "3b715e6c-855e-43db-92ac-d9b71b10c9be",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "70570a6a-3415-4ae0-9249-28c223700bcb",
          parcelas: 80,
          valor: 258.58,
          seguro: 5.98,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 14599,
        },
        {
          id: "ee97b3f3-7b0e-4874-b8cc-8f62e59745bf",
          parcelas: 48,
          valor: 416.06,
          seguro: 6,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 14599,
        },
        {
          id: "ee4f89a8-ff84-43dd-8a8b-f440ef36e54f",
          parcelas: 25,
          valor: 779.73,
          seguro: 5.63,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 14599,
        },
      ],
    },
  ],
};
