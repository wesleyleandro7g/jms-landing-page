import React, { useContext, useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { ColorSelect } from "../../components/inputs";
import { Footer } from "../../components/footer";
import { PlanCard } from "../../components/cards/planCard";
import { PurchaseContext } from "../../contexts/purchaseContext";

import database from "../../services/database.json";
import biz from "../../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";
import motor from "../../../public/assets/motor.svg";
import cilindrada from "../../../public/assets/cilindrada.svg";
import transmissao from "../../../public/assets/transmissao.svg";
import partida from "../../../public/assets/partida.svg";
import freios from "../../../public/assets/freios.svg";

import { Moto } from "../../types/moto";

interface QueryRouterProps {
  id?: string;
}

const MotorcycleDetails: NextPage = () => {
  const router = useRouter();
  const { productSelected } = useContext(PurchaseContext);
  const { id }: QueryRouterProps = router.query;
  const [data, setData] = useState<Moto>();

  useEffect(() => {
    setData(database.motos.find((moto) => moto.id === parseInt(id || "0")));
  }, []);

  return (
    <div className="flex flex-col justify-between w-full overflow-scroll h-screen bg-secondary">
      <header className="flex justify-start space-x-6 items-center p-4 bg-white shadow-sm">
        <Link href="/motos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-primary"
            viewBox="0 0 512 512"
          >
            <title>Chevron Back</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M328 112L184 256l144 144"
            />
          </svg>
        </Link>
        <h1 className="text-xl italic font-black text-primary font-roboto">
          James Moto Shop
        </h1>
        <div />
      </header>

      <main className="py-4 relative">
        <div className="px-4">
          <Image
            src={biz}
            layout="responsive"
            alt={`Imagem da motocicleta ${data?.nome}`}
          />
        </div>

        <div className="flex flex-col justify-center items-center text-center py-8 px-4">
          <h1 className="text-gray-800 text-2xl font-semibold">{data?.nome}</h1>
          <div className="space-x-1 py-4">
            {data?.cores.map((cor) => (
              <ColorSelect
                key={cor.id}
                id={cor.cor}
                value={cor.cor}
                color={cor.hex}
                name="colors"
              />
            ))}
          </div>
        </div>

        <div className="space-y-16 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image
                src={motor}
                layout="responsive"
                alt="Ícone ilustrando um motor"
              />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Motor</h3>
            <p className="text-base text-gray-800 leading-5">{data?.motor}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image
                src={cilindrada}
                layout="responsive"
                alt="Ícone ilustrando as cilindradas da moto"
              />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Cilindrada</h3>
            <p className="text-base text-gray-800 leading-5">
              {data?.cilindrada}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image
                src={transmissao}
                layout="responsive"
                alt="Ícone ilustrando a transmissão da moto"
              />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">
              Transmissão
            </h3>
            <p className="text-base text-gray-800 leading-5">
              {data?.transmissao}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image
                src={partida}
                layout="responsive"
                alt="Ícone ilustrando o tipo de partida da moto"
              />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">
              Sistema de Partida
            </h3>
            <p className="text-base text-gray-800 leading-5">{data?.partida}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image
                src={freios}
                layout="responsive"
                alt="Ícone ilustrando o tipo de freios da moto"
              />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Freios</h3>
            <p className="text-base text-gray-800 leading-5">{data?.freios}</p>
          </div>
        </div>

        <div className="my-16 space-y-4">
          <h2 className="text-3xl text-center text-black-800 font-bold">
            Nossos <span className="text-primary">Planos</span>
          </h2>
          <div className="flex overflow-scroll gap-4 px-4">
            <PlanCard />
            <PlanCard />
          </div>
        </div>

        <button
          className="
            fixed
            left-0
            bottom-0
            w-full
            py-4
            bg-primary
            text-white
            text-lg
            font-semibold
            uppercase
          "
        >
          Adquira por {productSelected.value} por mês
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default MotorcycleDetails;
