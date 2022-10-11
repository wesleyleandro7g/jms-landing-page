import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Form } from "@unform/web";

import { Footer } from "../../components/footer";
import { PurchaseContext } from "../../contexts/purchaseContext";
import Carousel from "../../components/carousel";
import Radio from "../../components/inputs/inputRadio";
import InputColor from "../../components/inputs/inputColor";

import { motos } from "../../database";
import motor from "../../../public/assets/motor.svg";
import cilindrada from "../../../public/assets/cilindrada.svg";
import transmissao from "../../../public/assets/transmissao.svg";
import partida from "../../../public/assets/partida.svg";
import freios from "../../../public/assets/freios.svg";
import biz from "../../../public/images/motos/BIZ_110/BIZ_110_BRANCA_LA.png";

import type { Moto } from "../../types/moto";

interface QueryRouterProps {
  id?: string;
}

interface ParcelsProps {
  id: string;
  parcel: number;
  label: string;
}

interface ColorsProps {
  id: string;
  name: string;
  hex: string;
}

const MotorcycleDetails: NextPage = () => {
  const router = useRouter();
  const { id }: QueryRouterProps = router.query;
  const { productSelected, setProductSelected } = useContext(PurchaseContext);
  const [moto, setMoto] = useState<Moto>();
  const [parcels, setParcels] = useState<Array<ParcelsProps>>();
  const [colors, setColors] = useState<Array<ColorsProps>>();

  function handleParcels(withDoc: boolean) {
    const parcelsArray: ParcelsProps[] = [];
    const motoAux = motos.find((moto) => moto.id === id);

    motoAux?.planos.map((plan) => {
      plan.caracteristicas.map((feature) => {
        if (feature.documentacao === withDoc) {
          parcelsArray.push({
            id: feature.id,
            parcel: feature.parcelas,
            label: feature.label,
          });
        }
      });
    });

    parcelsArray.map((parcel) => {
      if (parcel.parcel === productSelected.parcels) {
        setProductSelected({
          ...productSelected,
          featuresId: parcel.id,
        });
      }
    });

    const parcelsOrdened = parcelsArray.sort((a, b) => {
      return a.parcel < b.parcel ? -1 : a.parcel > b.parcel ? 1 : 0;
    });

    setParcels(parcelsOrdened);
  }

  function handleChangeDoc() {
    const documentation = document.querySelector(
      'input[name="doc"]:checked'
    ) as HTMLInputElement;

    handleParcels(documentation.value === "true");
  }

  function handleInitialColor() {
    const colorsAux = motos.find((moto) => moto.id === id)?.cores;
    const colorAux: ColorsProps[] = [];

    colorsAux?.map((color) => {
      colorAux.push({ id: color.id, name: color.cor, hex: color.hex });
    });

    if (colorsAux) {
      setColors(colorAux);

      setProductSelected({
        ...productSelected,
        colorId: colorsAux[0].id,
        colorName: colorsAux[0].cor,
        colorHex: colorsAux[0].hex,
      });
    }
  }

  function handleChangeColor() {
    const element = document.querySelector(
      'input[name="color"]:checked'
    ) as HTMLInputElement;

    const colorAux = colors?.find((color) => color.id === element.id);

    if (colorAux) {
      setProductSelected({
        ...productSelected,
        colorId: colorAux.id,
        colorName: colorAux.name,
        colorHex: colorAux.hex,
      });
    }
  }

  function handleIdealPlan() {
    const parcel = document.querySelector(
      `input[name=parcelas]:checked`
    ) as HTMLInputElement;

    moto?.planos.map((plan) => {
      plan.caracteristicas.map((feature) => {
        if (
          feature.parcelas === +parcel.value &&
          feature.documentacao === productSelected.documentation
        ) {
          setProductSelected({
            ...productSelected,
            parcels: feature.parcelas,
            value: feature.valor,
            planId: plan.id,
            featuresId: feature.id,
          });
        }
      });
    });
  }

  function getColors() {
    return colors?.map((color) => {
      return {
        id: color.id,
        color: color.hex,
        value: color.name,
      };
    });
  }

  function getMotoImages() {
    return (
      moto?.cores.find((color) => color.id === productSelected.colorId)
        ?.images || []
    );
  }

  function navigateToGetData() {
    router.push("/dados");
  }

  useEffect(() => {
    handleParcels(productSelected.documentation || false);
    setMoto(motos.find((moto) => moto.id === id));
    handleInitialColor();

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
        <Carousel images={getMotoImages()} />

        <div className="flex flex-col justify-center items-center text-center py-8 px-4">
          <h1 className="text-gray-800 text-2xl font-semibold">{moto?.nome}</h1>
          <Form onSubmit={() => {}} onChange={handleChangeColor}>
            <div className="flex space-x-1 py-4">
              <InputColor name="color" options={getColors()} />
            </div>
          </Form>
        </div>

        <div className="space-y-16 px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-1/3">
              <Image
                src={motor}
                layout="responsive"
                alt="Ícone ilustrando um motor"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mt-4">Motor</h3>
            <p className="text-lg text-gray-800 leading-5">{moto?.motor}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/3">
              <Image
                src={cilindrada}
                layout="responsive"
                alt="Ícone ilustrando as cilindradas da moto"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mt-4">Cilindrada</h3>
            <p className="text-lg text-gray-800 leading-5">
              {moto?.cilindrada}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/3">
              <Image
                src={transmissao}
                layout="responsive"
                alt="Ícone ilustrando a transmissão da moto"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mt-4">
              Transmissão
            </h3>
            <p className="text-lg text-gray-800 leading-5">
              {moto?.transmissao}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/3">
              <Image
                src={partida}
                layout="responsive"
                alt="Ícone ilustrando o tipo de partida da moto"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mt-4">
              Sistema de Partida
            </h3>
            <p className="text-lg text-gray-800 leading-5">{moto?.partida}</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-1/3">
              <Image
                src={freios}
                layout="responsive"
                alt="Ícone ilustrando o tipo de freios da moto"
              />
            </div>
            <h3 className="text-xl text-gray-800 font-bold mt-4">Freios</h3>
            <p className="text-lg text-gray-800 leading-5">{moto?.freios}</p>
          </div>
        </div>

        <div className="p-4 mx-4 my-16 bg-white rounded-md shadow-md space-y-8">
          <div>
            <div className="relative w-full min-h-[200px]">
              <Image
                src={getMotoImages()[0]?.src || biz}
                layout="fill"
                objectFit="contain"
                alt={moto?.nome}
              />
            </div>
            <div className="flex flex-col w-full text-center my-4">
              <h3 className="text-primary-300 text-2xl font-semibold text-center">
                {moto?.nome}
              </h3>
              <p className="text-gray-600">{productSelected.colorName}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center w-full space-y-8">
            <div className="flex flex-col w-full gap-4">
              <h6 className="text-lg text-gray-800 font-semibold">
                Com documentação:
              </h6>
              <Form
                id="documentation"
                onSubmit={() => {}}
                onChange={handleChangeDoc}
                initialData={{ doc: productSelected.documentation ? "1" : "0" }}
              >
                <div className="flex justify-start items-start gap-2">
                  <Radio
                    name="doc"
                    fullw
                    options={[
                      { id: "0", label: "Não", value: "false" },
                      { id: "1", label: "Sim", value: "true" },
                    ]}
                  />
                </div>
              </Form>
            </div>

            <div className="flex flex-col w-full gap-4">
              <h6 className="text-lg text-gray-800 font-semibold">
                Número de parcelas:
              </h6>
              <Form
                onSubmit={() => {}}
                onChange={handleIdealPlan}
                initialData={{ parcelas: productSelected.featuresId }}
              >
                <div className="grid grid-cols-3 gap-2">
                  <Radio
                    name="parcelas"
                    fullw
                    options={parcels?.map((parcel) => {
                      return {
                        id: parcel.id,
                        label: parcel.label,
                        value: parcel.parcel,
                      };
                    })}
                  />
                </div>
              </Form>
            </div>
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
