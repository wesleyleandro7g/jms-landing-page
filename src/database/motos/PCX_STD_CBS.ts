import type { Moto } from "../../types/moto";

import VoudeHonda from "/public/images/planos/VoudeHonda.png";
import MinhaScooter from "/public/images/planos/MinhaScooter.png";
import VoudeHondaMais from "/public/images/planos/VoudeHondaMais.png";
import MinhaScooterMais from "/public/images/planos/MinhaScooter.png";

import PCXAZUL_FD from "/public/images/motos/PCX_STD_CBS/PCXAZUL_FD.jpg";
import PCXAZUL_LA from "/public/images/motos/PCX_STD_CBS/PCXAZUL_LA.jpg";
import PCXAZUL_TD from "/public/images/motos/PCX_STD_CBS/PCXAZUL_TD.jpg";
import PCXAZUL_TE from "/public/images/motos/PCX_STD_CBS/PCXAZUL_TE.jpg";
import PCXBRANCA_FD from "/public/images/motos/PCX_STD_CBS/PCXBRANCA_FD.jpg";
import PCXBRANCA_LA from "/public/images/motos/PCX_STD_CBS/PCXBRANCA_LA.jpg";
import PCXBRANCA_TD from "/public/images/motos/PCX_STD_CBS/PCXBRANCA_TD.jpg";
import PCXBRANCA_TE from "/public/images/motos/PCX_STD_CBS/PCXBRANCA_TE.png";
import PCXCinza_FD from "/public/images/motos/PCX_STD_CBS/PCXCinza_FD.jpg";
import PCXCINZA_LA from "/public/images/motos/PCX_STD_CBS/PCXCINZA_LA.jpg";
import PCXCinza_TD from "/public/images/motos/PCX_STD_CBS/PCXCinza_TD.jpg";
import PCXCinza_TE from "/public/images/motos/PCX_STD_CBS/PCXCinza_TE.jpg";

export const PCX_STD_CBS: Moto = {
  id: "51a0ab18-2a76-4c9a-9b27-9e29874fea30",
  nome: "PCX STD CBS",
  motor: "OHC, Monocilíndrico, 4 tempos, arrefecido a líquido",
  cilindrada: "149,3 cc",
  transmissao: "Tipo V - MATIC",
  partida: "Elétrico",
  freios: "A disco / 220 mm",
  cores: [
    {
      id: "df377857-522e-48b8-a783-27d707b4e1f8",
      cor: "Branco",
      hex: "#fff",
      images: [PCXBRANCA_LA, PCXBRANCA_FD, PCXBRANCA_TD, PCXBRANCA_TE],
    },
    {
      id: "96a84537-08a0-4d5e-9b79-63e3e2d6467f",
      cor: "Cinza Metálico",
      hex: "#47505c",
      images: [PCXCINZA_LA, PCXCinza_FD, PCXCinza_TD, PCXCinza_TE],
    },
    {
      id: "0fc270d5-c0d4-422c-bb80-5d85001c1b66",
      cor: "Azul",
      hex: "#2e31a7",
      images: [PCXAZUL_LA, PCXAZUL_FD, PCXAZUL_TD, PCXAZUL_TE],
    },
  ],
  planos: [
    {
      id: "2326a952-9122-4411-b136-138dc084042c",
      nome: "Vou de honda",
      imagem: VoudeHonda,
      caracteristicas: [
        {
          id: "d147e4aa-63d7-407a-bbc9-d50c9aedf250",
          parcelas: 80,
          valor: 275.94,
          seguro: 6.37,
          contemplacoes: 12,
          documentacao: false,
          label: "80x",
          credito: 16981,
        },
        {
          id: "1188a15b-0030-4238-be6e-6867391cd497",
          parcelas: 48,
          valor: 443.98,
          seguro: 6.41,
          contemplacoes: 20,
          documentacao: false,
          label: "48x",
          credito: 16981,
        },
        {
          id: "0cb64371-8ce3-4222-ad64-d8dbc42980f0",
          parcelas: 25,
          valor: 832.07,
          seguro: 6,
          contemplacoes: 26,
          documentacao: false,
          label: "25x",
          credito: 16981,
        },
        {
          id: "3d27f93b-9e0e-4824-9e1d-e0f59b798b6f",
          parcelas: 12,
          valor: 1719.33,
          seguro: 5.95,
          contemplacoes: 26,
          documentacao: false,
          label: "12x",
          credito: 16981,
        },
      ],
    },
    {
      id: "0664fef2-ef2a-4462-a424-c7c482bbc8c3",
      nome: "Minha Scooter",
      imagem: MinhaScooter,
      caracteristicas: [
        {
          id: "cb41a3c5-b8d6-418a-90c1-342581beaf93",
          parcelas: 60,
          valor: 356.6,
          seguro: 6.18,
          contemplacoes: 12,
          documentacao: false,
          label: "60x",
          credito: 16981,
        },
        {
          id: "461c24c8-e9a7-44ae-97dd-fdf439c453aa",
          parcelas: 36,
          valor: 580.18,
          seguro: 6.03,
          contemplacoes: 15,
          documentacao: false,
          label: "36x",
          credito: 16981,
        },
      ],
    },
    {
      id: "f2f4dd5e-4734-43db-9f93-31ced8c7ae07",
      nome: "Vou de honda mais",
      imagem: VoudeHondaMais,
      caracteristicas: [
        {
          id: "f955977e-bdad-48f1-aded-c57d26a08764",
          parcelas: 80,
          valor: 298.02,
          seguro: 6.88,
          contemplacoes: 12,
          documentacao: true,
          label: "80x",
          credito: 16981,
        },
        {
          id: "8c1ae070-58cf-4311-be54-0a71e7e28cc0",
          parcelas: 48,
          valor: 479.5,
          seguro: 6.92,
          contemplacoes: 20,
          documentacao: true,
          label: "48x",
          credito: 16981,
        },
        {
          id: "a38dde50-9e48-4b54-9bd5-9e0ffb42b6d7",
          parcelas: 25,
          valor: 898.63,
          seguro: 6.49,
          contemplacoes: 26,
          documentacao: true,
          label: "25x",
          credito: 16981,
        },
      ],
    },
    {
      id: "eb9f5d6e-933b-43a7-9dfc-5d4da5e687be",
      nome: "Minha scooter mais",
      imagem: MinhaScooterMais,
      caracteristicas: [
        {
          id: "31d7c2dd-cf0c-4f4a-b37f-cb31da4421af",
          parcelas: 60,
          valor: 385.13,
          seguro: 6.67,
          contemplacoes: 12,
          documentacao: true,
          label: "60x",
          credito: 16981,
        },
        {
          id: "05cfdd98-9ef5-4255-95b6-9d6acb200438",
          parcelas: 36,
          valor: 626.6,
          seguro: 6.51,
          contemplacoes: 15,
          documentacao: true,
          label: "36x",
          credito: 16981,
        },
      ],
    },
  ],
};
