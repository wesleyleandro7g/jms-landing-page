import React, { useEffect, useRef, useState, useContext } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Footer } from "../../components/footer";
import { ProductCard } from "../../components/cards/productCard";
import { InputRange, InputRadio } from "../../components/inputs/inputs";
import { PrimaryButton } from "../../components/button";
import Filter, { FilterHandles } from "../../components/filter";
import { PurchaseContext } from "../../contexts/purchaseContext";

import { motos } from "../../database";

import { Plan } from "../../types/plan";
import { Moto } from "../../types/moto";

const Motorcycles: NextPage = () => {
  const modalRef = useRef<FilterHandles>(null);
  const { setProductSelected } = useContext(PurchaseContext);
  const router = useRouter();

  const [viewModeGrid, setViewModeGrid] = useState(true);
  const [rangeMinValue, setRangeMinValue] = useState(0);
  const [rangeMaxValue, setRangeMaxValue] = useState(0);
  const [rangeValue, setRangeValue] = useState(0);
  const [parcels, setParcels] = useState<number>(80);
  const [documentation, setDocumentation] = useState<boolean>(false);
  const [motosFiltered, setMotosFiltered] = useState(motos);
  const [motosFilteredAux, setMotosFilteredAux] = useState(motos);

  function toggleModalVisible() {
    modalRef.current?.toggleFilter();
  }

  function updateToGridViewMode() {
    if (!viewModeGrid) {
      setViewModeGrid(true);
      toggleStyleModeView();
    }
  }

  function updateTolistViewMode() {
    if (viewModeGrid) {
      setViewModeGrid(false);
      toggleStyleModeView();
    }
  }

  function toggleStyleModeView() {
    const main = document.getElementById("main-view");

    if (main) {
      if (main.style.display === "") {
        main.style.display = "grid";
      }

      if (main.style.display === "grid") {
        main.style.display = "flex";
      } else {
        main.style.display = "grid";
      }
    }
  }

  function getLowerPrice(plans: Plan[]): number {
    const values: Array<number> = [];

    plans.map((item) => {
      item.caracteristicas.map((feature) => {
        values.push(feature.valor);
      });
    });

    return Math.min(...values);
  }

  function getMinAndMaxPrice(motosParams: Moto[]) {
    const values: Array<number> = [];

    motosParams.map((moto) => {
      moto.planos.map((plan) => {
        plan.caracteristicas.map((feature) => {
          values.push(feature.valor);
        });
      });
    });

    if (values.length > 0) {
      setRangeMinValue(Math.min(...values));
      setRangeMaxValue(Math.max(...values));
      setRangeValue(Math.max(...values));
    }
  }

  function renderValueFilter(value: number) {
    const dataFilteredByValue = motosFilteredAux.filter((moto) => {
      const motos = moto.planos.filter((plan) => {
        const plans = plan.caracteristicas.filter(
          (feature) => feature.valor <= value
        );

        return plans.length > 0;
      });

      return motos.length > 0;
    });

    setRangeValue(value);
    setMotosFiltered(dataFilteredByValue);
  }

  function renderParcelFilter() {
    const parcel = document.querySelector(
      'input[name="parcel"]:checked'
    ) as HTMLInputElement;

    const documentation = document.querySelector(
      'input[name="doc"]:checked'
    ) as HTMLInputElement;

    const motosAux: Moto[] = [];

    motos.map((moto) => {
      const planos: Plan[] = [];

      const plans = moto.planos.filter((plan) => {
        const features = plan.caracteristicas.filter((feature) => {
          if (parcel && documentation) {
            setParcels(+parcel.value);
            setDocumentation(documentation.value === "true");

            return (
              feature.parcelas === +parcel.value &&
              feature.documentacao === (documentation.value === "true")
            );
          } else if (parcel) {
            setParcels(+parcel.value);

            return feature.parcelas === +parcel.value;
          } else if (documentation) {
            setDocumentation(documentation.value === "true");

            return feature.documentacao === (documentation.value === "true");
          }
        });

        if (features.length > 0) {
          planos.push({ ...plan, caracteristicas: features });
        }

        return features.length > 0;
      });

      if (plans.length > 0) {
        motosAux.push({ ...moto, planos });
      }
    });

    getMinAndMaxPrice(motosAux);
    setMotosFiltered(motosAux);
    setMotosFilteredAux(motosAux);
  }

  function navigateToProduct(moto: Moto) {
    const parcelsArray: { id: string; parcels: number }[] = [];
    const motoAux = motos.find((item) => item.id === moto.id);

    motoAux?.planos.map((plan) => {
      plan.caracteristicas.map((feature) => {
        if (feature.documentacao === documentation) {
          parcelsArray.push({
            id: feature.id,
            parcels: feature.parcelas,
          });
        }
      });
    });

    parcelsArray.map((parcel) => {
      if (parcel.parcels === parcels) {
        setProductSelected({
          id: moto.id,
          parcels: parcels,
          featuresId: parcel.id,
          documentation: documentation,
          value: getLowerPrice(moto.planos),
        });
      }
    });

    router.push(`/motos/${moto.id}`);
  }

  useEffect(() => {
    getMinAndMaxPrice(motos);
  }, []);

  return (
    <>
      <div
        id="container"
        className="flex flex-col justify-between w-full min-h-[150vh] bg-secondary"
      >
        <header className="flex justify-between items-center w-full p-4 fixed z-50 bg-white/70 backdrop-blur-md shadow-sm">
          <Link href="/">
            <h1 className="text-xl italic font-roboto font-black text-primary">
              James Moto Shop
            </h1>
          </Link>
          <button onClick={toggleModalVisible}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer w-7 h-7"
            >
              <path
                d="M2.125 9.5625H31.875M7.4375 17H26.5625M13.8125 24.4375H20.1875"
                stroke="#CD0707"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </header>

        {motosFiltered.length === 0 ? (
          <main className="flex justify-center items-center text-center w-full h-screen p-4">
            <h4 className="text-gray-800">
              Nenhum resultado para os filtros informados, por favor revise os
              filtros.
            </h4>
          </main>
        ) : (
          <main
            id="main-view"
            className="grid flex-col grid-cols-2 gap-2 md:grid-cols-5 p-4 mt-16"
          >
            {motosFiltered.map((moto) => (
              <ProductCard
                key={moto.id}
                id={moto.id}
                name={moto.nome}
                price={getLowerPrice(moto.planos)}
                image={moto.cores[0].images[0]}
                viewGridMode={viewModeGrid}
                navigate={() => navigateToProduct(moto)}
              />
            ))}
          </main>
        )}

        <Footer />
      </div>

      <Filter ref={modalRef}>
        <div className="flex justify-between items-center w-full">
          <h6 className="text-lg text-gray-800 font-semibold">Visualização</h6>
          <div className="flex divide-x-2">
            <button onClick={updateToGridViewMode}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8793 13.9757H3.95976C3.40377 13.9757 2.87055 13.7548 2.47741 13.3617C2.08427 12.9686 1.8634 12.4353 1.8634 11.8793V3.95979C1.8634 3.4038 2.08427 2.87058 2.47741 2.47744C2.87055 2.0843 3.40377 1.86343 3.95976 1.86343H11.8793C12.4353 1.86343 12.9685 2.0843 13.3617 2.47744C13.7548 2.87058 13.9757 3.4038 13.9757 3.95979V11.8793C13.9757 12.4353 13.7548 12.9686 13.3617 13.3617C12.9685 13.7548 12.4353 13.9757 11.8793 13.9757ZM25.855 13.9757H17.9355C17.3795 13.9757 16.8462 13.7548 16.4531 13.3617C16.06 12.9686 15.8391 12.4353 15.8391 11.8793V3.95979C15.8391 3.4038 16.06 2.87058 16.4531 2.47744C16.8462 2.0843 17.3795 1.86343 17.9355 1.86343H25.855C26.411 1.86343 26.9442 2.0843 27.3374 2.47744C27.7305 2.87058 27.9514 3.4038 27.9514 3.95979V11.8793C27.9514 12.4353 27.7305 12.9686 27.3374 13.3617C26.9442 13.7548 26.411 13.9757 25.855 13.9757ZM11.8793 27.9514H3.95976C3.40377 27.9514 2.87055 27.7305 2.47741 27.3374C2.08427 26.9442 1.8634 26.411 1.8634 25.855V17.9355C1.8634 17.3795 2.08427 16.8463 2.47741 16.4531C2.87055 16.06 3.40377 15.8391 3.95976 15.8391H11.8793C12.4353 15.8391 12.9685 16.06 13.3617 16.4531C13.7548 16.8463 13.9757 17.3795 13.9757 17.9355V25.855C13.9757 26.411 13.7548 26.9442 13.3617 27.3374C12.9685 27.7305 12.4353 27.9514 11.8793 27.9514ZM25.855 27.9514H17.9355C17.3795 27.9514 16.8462 27.7305 16.4531 27.3374C16.06 26.9442 15.8391 26.411 15.8391 25.855V17.9355C15.8391 17.3795 16.06 16.8463 16.4531 16.4531C16.8462 16.06 17.3795 15.8391 17.9355 15.8391H25.855C26.411 15.8391 26.9442 16.06 27.3374 16.4531C27.7305 16.8463 27.9514 17.3795 27.9514 17.9355V25.855C27.9514 26.411 27.7305 26.9442 27.3374 27.3374C26.9442 27.7305 26.411 27.9514 25.855 27.9514Z"
                  fill={viewModeGrid ? "#DC002D" : "#797979"}
                />
              </svg>
            </button>

            <button onClick={updateTolistViewMode}>
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6941 13.9757H4.77458C4.21859 13.9757 3.68537 13.7548 3.29223 13.3617C2.89909 12.9686 2.67822 12.4353 2.67822 11.8793V3.95979C2.67822 3.4038 2.89909 2.87058 3.29223 2.47744C3.68537 2.0843 4.21859 1.86343 4.77458 1.86343H12.6941C13.2501 1.86343 13.7833 2.0843 14.1765 2.47744C14.5696 2.87058 14.7905 3.4038 14.7905 3.95979V11.8793C14.7905 12.4353 14.5696 12.9686 14.1765 13.3617C13.7833 13.7548 13.2501 13.9757 12.6941 13.9757ZM12.6941 27.9514H4.77458C4.21859 27.9514 3.68537 27.7305 3.29223 27.3374C2.89909 26.9442 2.67822 26.411 2.67822 25.855V17.9355C2.67822 17.3795 2.89909 16.8463 3.29223 16.4531C3.68537 16.06 4.21859 15.8391 4.77458 15.8391H12.6941C13.2501 15.8391 13.7833 16.06 14.1765 16.4531C14.5696 16.8463 14.7905 17.3795 14.7905 17.9355V21.8953V25.855C14.7905 26.411 14.5696 26.9442 14.1765 27.3374C13.7833 27.7305 13.2501 27.9514 12.6941 27.9514Z"
                  fill={viewModeGrid ? "#797979" : "#DC002D"}
                />
                <path
                  d="M20.6545 13.9757H12.7349C12.1789 13.9757 11.6457 13.7548 11.2526 13.3617C10.8594 12.9686 10.6386 12.4353 10.6386 11.8793V3.95979C10.6386 3.4038 10.8594 2.87058 11.2526 2.47744C11.6457 2.0843 12.1789 1.86343 12.7349 1.86343H20.6545C21.2105 1.86343 21.7437 2.0843 22.1368 2.47744C22.53 2.87058 22.7508 3.4038 22.7508 3.95979V11.8793C22.7508 12.4353 22.53 12.9686 22.1368 13.3617C21.7437 13.7548 21.2105 13.9757 20.6545 13.9757ZM20.6545 27.9514H12.7349C12.1789 27.9514 11.6457 27.7305 11.2526 27.3374C10.8594 26.9442 10.6386 26.411 10.6386 25.855V17.9355C10.6386 17.3795 10.8594 16.8463 11.2526 16.4531C11.6457 16.06 12.1789 15.8391 12.7349 15.8391H20.6545C21.2105 15.8391 21.7437 16.06 22.1368 16.4531C22.53 16.8463 22.7508 17.3795 22.7508 17.9355V21.8953V25.855C22.7508 26.411 22.53 26.9442 22.1368 27.3374C21.7437 27.7305 21.2105 27.9514 20.6545 27.9514Z"
                  fill={viewModeGrid ? "#797979" : "#DC002D"}
                />
                <path
                  d="M26.7106 13.9757H18.7911C18.2351 13.9757 17.7019 13.7548 17.3087 13.3617C16.9156 12.9686 16.6947 12.4353 16.6947 11.8793V3.95979C16.6947 3.4038 16.9156 2.87058 17.3087 2.47744C17.7019 2.0843 18.2351 1.86343 18.7911 1.86343H26.7106C27.2666 1.86343 27.7998 2.0843 28.193 2.47744C28.5861 2.87058 28.807 3.4038 28.807 3.95979V11.8793C28.807 12.4353 28.5861 12.9686 28.193 13.3617C27.7998 13.7548 27.2666 13.9757 26.7106 13.9757ZM26.7106 27.9514H18.7911C18.2351 27.9514 17.7019 27.7305 17.3087 27.3374C16.9156 26.9442 16.6947 26.411 16.6947 25.855V17.9355C16.6947 17.3795 16.9156 16.8463 17.3087 16.4531C17.7019 16.06 18.2351 15.8391 18.7911 15.8391H26.7106C27.2666 15.8391 27.7998 16.06 28.193 16.4531C28.5861 16.8463 28.807 17.3795 28.807 17.9355V21.8953V25.855C28.807 26.411 28.5861 26.9442 28.193 27.3374C27.7998 27.7305 27.2666 27.9514 26.7106 27.9514Z"
                  fill={viewModeGrid ? "#797979" : "#DC002D"}
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-between items-center">
            <h6 className="text-lg text-gray-800 font-semibold">
              Valor da parcela até:
            </h6>
            <h5 className="px-2 py-1 rounded-lg text-white bg-primary-300">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(rangeValue)}
            </h5>
          </div>
          <InputRange
            min={rangeMinValue}
            max={rangeMaxValue}
            step={10}
            value={rangeValue}
            onChange={(e) => renderValueFilter(parseFloat(e.target.value))}
          />
        </div>

        <div className="flex flex-col w-full gap-4">
          <h6 className="text-lg text-gray-800 font-semibold">
            Número de parcelas
          </h6>

          <form id="parcels" onChange={renderParcelFilter}>
            <div className="grid grid-cols-3 gap-2">
              <InputRadio id="12x" value={12} name="parcel" />
              <InputRadio id="25x" value={25} name="parcel" />
              <InputRadio id="36x" value={36} name="parcel" />
              <InputRadio id="48x" value={48} name="parcel" />
              <InputRadio id="60x" value={60} name="parcel" />
              <InputRadio id="80x" value={80} name="parcel" />
            </div>
          </form>
        </div>

        <div className="flex flex-col w-full gap-4">
          <h6 className="text-lg text-gray-800 font-semibold">
            Documentação inclusa
          </h6>
          <form id="documentation" onChange={renderParcelFilter}>
            <div className="flex justify-start items-start gap-2">
              <InputRadio id="Não" value="false" name="doc" />
              <InputRadio id="Sim" value="true" name="doc" />
            </div>
          </form>
        </div>

        <PrimaryButton
          style={{ boxShadow: "none" }}
          onClick={toggleModalVisible}
        >
          <span className="font-semibold uppercase">Aplicar filtros</span>
        </PrimaryButton>
      </Filter>
    </>
  );
};

export default Motorcycles;
