import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import MinhaScooter from "/public/images/planos/MinhaScooter.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";
import MinhaScooterMais from "/public/images/planos/MinhaScooter.png";

import ELITE125_PRATAMETALICO_LA from "/public/images/motos/ELITE_125/ELITE125_pratametalico_LA.png";
import ELITE125_PRATAMETALICO_FD from "/public/images/motos/ELITE_125/ELITE125_pratametalico_FD.png";
import ELITE125_PRATAMETALICO_TD_esq from "/public/images/motos/ELITE_125/ELITE125_pratametalico_TD_esq.png";
import ELITE125_PRATAMETALICO_TD_dir from "/public/images/motos/ELITE_125/ELITE125_pratametalico_TD_dir.png";

export const ELITE_125: Moto = {
  id: "c0ff7ccc-6ec1-4146-9ee6-de9a6297baf1",
  nome: "Elite 125",
  motor: "OHC, Monocilíndrico 4 tempos, arrefecido a ar",
  cilindrada: "124,9 cc",
  transmissao: "Tipo V - MATIC",
  partida: "Elétrico",
  freios: "A disco/ 190 mm",
  cores: [
    {
      id: "73921b86-a43f-40f3-b000-fc7a2161a02a",
      cor: "Prata Metálico",
      hex: "#9e9da2",
      images: [
        ELITE125_PRATAMETALICO_LA,
        ELITE125_PRATAMETALICO_FD,
        ELITE125_PRATAMETALICO_TD_esq,
        ELITE125_PRATAMETALICO_TD_dir,
      ],
    },
  ],
  planos: [
    {
      id: "960dedca-ee95-457d-8d4f-e2db5d0d60fa",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "455031a3-8577-4240-ace2-6e432a53b166",
          parcelas: 80,
          valor: 211.28,
          seguro: 4.88,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 13002,
        },
        {
          id: "3604831b-dce3-4457-924e-6f00c4f2e8b8",
          parcelas: 48,
          valor: 339.95,
          seguro: 4.91,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 13002,
        },
        {
          id: "892d3fff-981d-4d86-9fb9-fcd7f5fc2d32",
          parcelas: 25,
          valor: 637.1,
          seguro: 4.6,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 13002,
        },
        {
          id: "7eea14cb-24eb-457e-9181-65a28559e10e",
          parcelas: 12,
          valor: 1316.45,
          seguro: 4.56,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 13002,
        },
      ],
    },
    {
      id: "344b4937-2e67-4a0f-80e1-0cc52d5b9c67",
      nome: "Minha scooter",
      imagem: MinhaScooter,
      caracteristicas: [
        {
          id: "8aba4d01-7752-4ace-9203-0fe997182328",
          parcelas: 60,
          valor: 273.04,
          seguro: 4.73,
          contemplacoes: 12,
          documentacao: false,
          label: "12x",
          credito: 13002,
        },
        {
          id: "c2d10c9f-72c6-49c2-b708-42814c6fcaa6",
          parcelas: 36,
          valor: 444.24,
          seguro: 4.61,
          contemplacoes: 15,
          documentacao: false,
          label: "36x",
          credito: 13002,
        },
      ],
    },
    {
      id: "2ad665a4-99af-4f3e-a04d-d5fddfb3d560",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "124eaa5f-6853-418a-9fef-89255611d555",
          parcelas: 80,
          valor: 230.3,
          seguro: 5.32,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 13002,
        },
        {
          id: "65411b60-d8e1-4f5e-a8b6-ab3aa3dcdae7",
          parcelas: 48,
          valor: 370.54,
          seguro: 5.35,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 13002,
        },
        {
          id: "c72ae2d6-7183-40b2-a064-4695b56edae4",
          parcelas: 25,
          valor: 694.44,
          seguro: 5.01,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 13002,
        },
      ],
    },
    {
      id: "a34dfb1e-9da4-4550-8062-59c7959ebc88",
      nome: "Minha scooter mais",
      imagem: MinhaScooterMais,
      caracteristicas: [
        {
          id: "49c055ab-2372-4f7d-869a-8d2a21e21814",
          parcelas: 60,
          valor: 297.62,
          seguro: 5.15,
          contemplacoes: 12,
          documentacao: true,
          label: "60x",
          credito: 13002,
        },
        {
          id: "adec4ddb-2dde-4db7-9874-8f391ef07e0c",
          parcelas: 36,
          valor: 484.22,
          seguro: 5.03,
          contemplacoes: 15,
          documentacao: true,
          label: "36x",
          credito: 13002,
        },
      ],
    },
  ],
};
