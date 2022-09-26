import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { ColorSelect } from "../../components/inputs";
import { Footer } from "../../components/footer";
import { PlanCard } from "../../components/cards/planCard";

import { motos } from "../../services/database.json";
import biz from "../../../public/images/motorcycles/BIZ_110/BIZ_110_BRANCA_LATERAL.png";
import motor from "../../../public/assets/motor.svg";
import cilindrada from "../../../public/assets/cilindrada.svg";
import transmissao from "../../../public/assets/transmissao.svg";
import partida from "../../../public/assets/partida.svg";
import freios from "../../../public/assets/freios.svg";

const MotorcycleDetails: NextPage = () => {
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
          <Image src={biz} layout="responsive" />
        </div>

        <div className="flex flex-col justify-center items-center text-center py-8 px-4">
          <h1 className="text-gray-800 text-2xl font-semibold">
            {motos[0].nome}
          </h1>
          <div className="space-x-1 py-4">
            {motos[0].cores.map((cor) => (
              <ColorSelect
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
              <Image src={motor} layout="responsive" />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Motor</h3>
            <p className="text-base text-gray-800 leading-5">
              {motos[0].motor}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image src={cilindrada} layout="responsive" />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Cilindrada</h3>
            <p className="text-base text-gray-800 leading-5">
              {motos[0].cilindrada}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image src={transmissao} layout="responsive" />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">
              Transmissão
            </h3>
            <p className="text-base text-gray-800 leading-5">
              {motos[0].transmissao}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image src={partida} layout="responsive" />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">
              Sistema de Partida
            </h3>
            <p className="text-base text-gray-800 leading-5">
              {motos[0].partida}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/2">
              <Image src={freios} layout="responsive" />
            </div>
            <h3 className="text-lg text-gray-800 font-bold mt-4">Freios</h3>
            <p className="text-base text-gray-800 leading-5">
              {motos[0].freios}
            </p>
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
          Adquira por 155 por mês
        </button>
      </main>

      <Footer />
    </div>
  );
};

export default MotorcycleDetails;
