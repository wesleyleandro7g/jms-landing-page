import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";
import Conquista from "/public/images/planos/Conquista.png";
import Multichances from "/public/images/planos/Multichances.png";

import CG_160_TITAN_CINZA_METALICO_LA from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_CINZA_METALICO_LA.png";
import CG_160_TITAN_CINZA_METALICO_FD from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_CINZA_METALICO_FD.png";
import CG_160_TITAN_CINZA_METALICO_TD from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_CINZA_METALICO_TD.png";
import CG_160_TITAN_CINZA_METALICO_TDL from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_CINZA_METALICO_TDL.png";
import CG_160_TITAN_LA from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_LA.png";
import CG_160_TITAN_FD_dir from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_FD_dir.png";
import CG_160_TITAN_TD_dir from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_TD_dir.png";
import CG_160_TITAN_TD_esq from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_TD_esq.png";
import CG_160_TITAN_Vermelho_LATERAL from "/public/images/motos/CG_160_TITAN/CG_160_TITAN_Vermelho_LATERAL.png";

export const CG_160_TITAN: Moto = {
  id: "a12e9be3-d661-471e-ad6d-4a6dbc3b0caf",
  nome: "CG 160 TITAN",
  motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
  cilindrada: "162,7 cc",
  transmissao: "5 velocidades",
  partida: "Elétrico",
  freios:
    "Freio Dianteiro/Diâmetro: A disco / 240 mm; Freio Traseiro/Diâmetro: A tambor / 130 mm",
  cores: [
    {
      id: "a446b2bd-5161-404d-b0a3-e3acee98e726",
      cor: "Prata Metálico",
      hex: "#d0d0d2",
      images: [
        CG_160_TITAN_LA,
        CG_160_TITAN_FD_dir,
        CG_160_TITAN_TD_dir,
        CG_160_TITAN_TD_esq,
      ],
    },
    {
      id: "bf477329-1730-449d-858e-a7e62babd1d3",
      cor: "Cinza Metálico",
      hex: "#47505c",
      images: [
        CG_160_TITAN_CINZA_METALICO_LA,
        CG_160_TITAN_CINZA_METALICO_FD,
        CG_160_TITAN_CINZA_METALICO_TD,
        CG_160_TITAN_CINZA_METALICO_TDL,
      ],
    },
    {
      id: "99ddd049-3b6f-4ccc-b19f-002eb7f4d7e2",
      cor: "Vermelho",
      hex: "#de3035",
      images: [
        CG_160_TITAN_Vermelho_LATERAL,
        CG_160_TITAN_Vermelho_LATERAL,
        CG_160_TITAN_Vermelho_LATERAL,
        CG_160_TITAN_Vermelho_LATERAL,
      ],
    },
  ],
  planos: [
    {
      id: "7d28bbc5-b489-4056-8808-289461dfbd76",
      nome: "Conquista",
      imagem: Conquista,
      caracteristicas: [
        {
          id: "44f7559e-cbd1-4475-bb31-d670d87be179",
          parcelas: 60,
          valor: 350.39,
          seguro: 6.07,
          contemplacoes: 16,
          documentacao: false,
          label: "60x",
          credito: 16554,
        },
        {
          id: "038ab977-96e6-47bb-943d-0dc5d0913f4c",
          parcelas: 36,
          valor: 572.49,
          seguro: 5.95,
          contemplacoes: 26,
          documentacao: false,
          label: "36x",
          credito: 16554,
        },
      ],
    },
    {
      id: "c9d4e3ee-c23a-488e-ad8f-dc2d2f9d0c32",
      nome: "Multichances",
      imagem: Multichances,
      caracteristicas: [
        {
          id: "f7b9c2b5-f384-4668-9d9f-6ef85d768755",
          parcelas: 60,
          valor: 378.42,
          seguro: 6.56,
          contemplacoes: 16,
          documentacao: true,
          label: "60x",
          credito: 16554,
        },
        {
          id: "c340bdab-7a53-48d0-8299-f945edb387d6",
          parcelas: 36,
          valor: 618.29,
          seguro: 6.43,
          contemplacoes: 26,
          documentacao: true,
          label: "36x",
          credito: 16554,
        },
      ],
    },
    {
      id: "8aa9654b-e7ce-47e6-9a4c-14a615179640",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "abce67aa-7a84-4a16-b7f9-c3521d82af5f",
          parcelas: 80,
          valor: 269,
          seguro: 6.22,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 16554,
        },
        {
          id: "84b90e54-7f7e-4134-91a9-c863c86ebdb5",
          parcelas: 48,
          valor: 432.82,
          seguro: 6.25,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 16554,
        },
        {
          id: "44435704-d6ea-466d-bf13-4a22bf12a261",
          parcelas: 25,
          valor: 811.15,
          seguro: 5.85,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 16554,
        },
        {
          id: "75ae9917-1d71-41a3-9645-97ad0aa63b79",
          parcelas: 12,
          valor: 1676.09,
          seguro: 5.81,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 16554,
        },
      ],
    },
    {
      id: "3846643b-1ac5-4f8c-989d-632e3cd6cdd6",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "d3fc702a-c479-472a-a3b4-6b57df5e84f2",
          parcelas: 80,
          valor: 290.52,
          seguro: 6.71,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 16554,
        },
        {
          id: "2c34ecba-5ae7-4db5-8a73-42ccefb8e922",
          parcelas: 48,
          valor: 467.44,
          seguro: 6.75,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 16554,
        },
        {
          id: "1c8071c8-c6c5-4ded-9efe-7e796d2eb704",
          parcelas: 25,
          valor: 876.04,
          seguro: 6.32,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 16554,
        },
      ],
    },
  ],
};
