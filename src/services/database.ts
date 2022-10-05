import { Moto } from "../types/moto";

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
        images: [
          {
            id: 0,
            nome: "lateral",
            src: require("/public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png"),
          },
          {
            id: 1,
            nome: "frente",
            src: "/motorcycles/BIZ_110/BIZ_110_BRANCA_3.4_FD.png",
          },
          {
            id: 2,
            nome: "traseira",
            src: "/motorcycles/BIZ_110/BIZ_110_BRANCA_3.4_TD.png",
          },
        ],
      },
      {
        id: 1,
        cor: "Cinza Metálico",
        hex: "#383838",
        images: [
          {
            id: 0,
            nome: "lateral",
            src: "/motorcycles/BIZ_110/BIZ_110_CINZA_LATERAL.png",
          },
          {
            id: 1,
            nome: "frente",
            src: "/motorcycles/BIZ_110/BIZ_110_CINZA_3.4_FD.png",
          },
          {
            id: 2,
            nome: "traseira",
            src: "/motorcycles/BIZ_110/BIZ_110_CINZA_3.4_TD.png",
          },
        ],
      },
      {
        id: 2,
        cor: "Vermelho Perolizado",
        hex: "#BC161A",
        images: [
          {
            id: 0,
            nome: "lateral",
            src: "/motorcycles/BIZ_110/BIZ_110_VERMELHA_LATERAL.png",
          },
          {
            id: 1,
            nome: "frente",
            src: "/motorcycles/BIZ_110/BIZ_110_VERMELHA_3.4_FD.png",
          },
          {
            id: 2,
            nome: "traseira",
            src: "/motorcycles/BIZ_110/BIZ_110_VERMELHA_3.4_TD.png",
          },
        ],
      },
    ],
    planos: [
      {
        id: 0,
        nome: "Vou de Honda",
        imagem: "/planos/VoudeHonda.png",
        caracteristicas: [
          {
            id: 0,
            parcelas: 80,
            valor: 185.64,
            seguro: 4.29,
            contemplacoes: 12,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 1,
            parcelas: 48,
            valor: 298.69,
            seguro: 4.31,
            contemplacoes: 20,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 2,
            parcelas: 25,
            valor: 559.78,
            seguro: 4.04,
            contemplacoes: 26,
            documentacao: false,
            credito: 11424,
          },
          {
            id: 3,
            parcelas: 12,
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
        imagem: "/planos/VoudeHondaMais.png",
        caracteristicas: [
          {
            id: 0,
            parcelas: 80,
            valor: 202.35,
            seguro: 4.67,
            contemplacoes: 12,
            documentacao: true,
            credito: 11424,
          },
          {
            id: 1,
            parcelas: 48,
            valor: 325.57,
            seguro: 4.7,
            contemplacoes: 20,
            documentacao: true,
            credito: 11424,
          },
          {
            id: 2,
            parcelas: 25,
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
