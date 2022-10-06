import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { ColorSelect } from "../../components/inputs/inputs";
import { Footer } from "../../components/footer";
import { PlanCard } from "../../components/cards/planCard";
import { PurchaseContext } from "../../contexts/purchaseContext";
import Carousel from "../../components/carousel";

import { motos } from "../../services/database";
import motor from "../../../public/assets/motor.svg";
import cilindrada from "../../../public/assets/cilindrada.svg";
import transmissao from "../../../public/assets/transmissao.svg";
import partida from "../../../public/assets/partida.svg";
import freios from "../../../public/assets/freios.svg";

import type { Moto } from "../../types/moto";

interface QueryRouterProps {
  id?: string;
}

const MotorcycleDetails: NextPage = () => {
  const router = useRouter();
  const { productSelected, setProductSelected } = useContext(PurchaseContext);
  const { id }: QueryRouterProps = router.query;
  const [data, setData] = useState<Moto>();
  const [colorSelected, setColorSelected] = useState(0);
  const [planIndex, setPlanIndex] = useState(0);

  function handleChangeColor() {
    const color = document.querySelector(
      'input[name="color"]:checked'
    ) as HTMLInputElement;

    setColorSelected(parseInt(color.value));
  }

  function handlePrevPlan() {
    const nextIndex = planIndex - 1;

    if (nextIndex < 0 && data?.planos) {
      const planAux = data?.planos[data?.planos.length - 1];

      const featureAux = planAux.caracteristicas.find((feature) => {
        return feature.parcelas === (productSelected.parcels || 80);
      });

      setProductSelected({
        ...productSelected,
        value: featureAux?.valor,
        planId: planAux.id,
        featuresId: featureAux?.id,
        documentation: featureAux?.documentacao,
      });

      setPlanIndex(data?.planos.length - 1);
    } else {
      const planAux = data?.planos[nextIndex];

      const featureAux = planAux?.caracteristicas.find((feature) => {
        return feature.parcelas === (productSelected.parcels || 80);
      });

      setProductSelected({
        ...productSelected,
        value: featureAux?.valor,
        planId: planAux?.id,
        featuresId: featureAux?.id,
        documentation: featureAux?.documentacao,
      });
      setPlanIndex(nextIndex);
    }
  }

  function handleNextPlan() {
    if (data?.planos) {
      const planAux = data?.planos[(planIndex + 1) % data?.planos.length];

      const featureAux = planAux.caracteristicas.find((feature) => {
        return feature.parcelas === (productSelected.parcels || 80);
      });

      setProductSelected({
        ...productSelected,
        value: featureAux?.valor,
        planId: planAux.id,
        featuresId: featureAux?.id,
        documentation: featureAux?.documentacao,
      });
      setPlanIndex((planIndex + 1) % data?.planos.length);
    }
  }

  function findIdealPlan() {
    const moto = motos.find((moto) => moto.id === parseInt(id || "0"));

    moto?.planos.map((plan, index) => {
      return plan.caracteristicas.map((features) => {
        if (
          features.documentacao === productSelected.documentation &&
          features.parcelas === productSelected.parcels
        ) {
          setPlanIndex(index);
        }
      });
    });
  }

  function navigateToGetData() {
    router.push("/dados");
  }

  useEffect(() => {
    findIdealPlan();
    setData(motos.find((moto) => moto.id === parseInt(id || "0")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
        <Carousel images={data?.cores[colorSelected].images || []} />

        <div className="flex flex-col justify-center items-center text-center py-8 px-4">
          <h1 className="text-gray-800 text-2xl font-semibold">{data?.nome}</h1>
          <form onChange={handleChangeColor}>
            <div className="space-x-1 py-4">
              {data?.cores.map((cor) => (
                <ColorSelect
                  key={cor.id}
                  id={cor.cor}
                  value={cor.id}
                  color={cor.hex}
                  name="color"
                />
              ))}
            </div>
          </form>
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
          <div className="flex justify-center relative px-4">
            <PlanCard
              key={data?.planos[planIndex].id}
              plan={data?.planos[planIndex]}
            />

            <button
              type="button"
              className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
              onClick={handlePrevPlan}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary group-focus:ring-2 group-focus:ring-primary/50 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="hidden">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group outline-none"
              onClick={handleNextPlan}
            >
              <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-primary group-focus:ring-2 group-focus:ring-primary/50 group-focus:outline-none">
                <svg
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="hidden">Next</span>
              </span>
            </button>
          </div>
        </div>

        {productSelected.value && (
          <button
            onClick={navigateToGetData}
            className="fixed left-0 bottom-0 w-full py-4 bg-primary text-white text-lg font-semibold uppercase"
          >
            Adquira por {productSelected.value} por mês
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default MotorcycleDetails;
