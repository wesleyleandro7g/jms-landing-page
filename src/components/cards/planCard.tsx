import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { FormHelpers } from "@unform/core";
import { Form } from "@unform/web";

import { PurchaseContext } from "../../contexts/purchaseContext";
import Radio from "../inputRadio";

import type { Plan } from "../../types/plan";
import type { Feature } from "../../types/feature";

interface PlanCardProps {
  selected?: boolean;
  plan: Plan;
}

export function PlanCard({ plan, selected }: PlanCardProps) {
  const { productSelected, setProductSelected } = useContext(PurchaseContext);
  const [feature, setFeature] = useState<Feature>();

  function handleSubmit(data: FormData, { reset }: FormHelpers) {
    console.log(data);

    reset();
  }

  function handleFilterPlan() {
    const caracteristicas = plan.caracteristicas.find(
      (feature) => feature.parcelas === productSelected.parcels
    );

    setFeature(caracteristicas);
  }

  function handleFilter() {
    const parcel = document.querySelector(
      `input[name=parcelas-${plan.id}]:checked`
    ) as HTMLInputElement;

    const caracteristicas = plan.caracteristicas.find(
      (feature) => feature.parcelas === parseInt(parcel.value)
    );

    setFeature(caracteristicas);
    setProductSelected({
      ...productSelected,
      value: caracteristicas?.valor,
      parcels: caracteristicas?.parcelas,
    });
  }

  useEffect(() => {
    handleFilterPlan();
  }, []);

  return (
    <div
      className={`flex flex-col bg-white shadow-md rounded-lg p-4 space-y-8 border-2 ${
        selected ? "border-primary" : "border-white"
      }`}
    >
      <div className="w-1/2">
        <Image
          src={plan.imagem}
          layout="responsive"
          alt="Imagem ilustrativa do plano"
        />
      </div>

      <div className="flex flex-col w-full gap-4">
        <h6 className="text-lg text-gray-800 font-light">Número de parcelas</h6>

        <Form
          onSubmit={handleSubmit}
          onChange={handleFilter}
          initialData={{
            [`parcelas-${plan.id}`]: JSON.stringify(
              productSelected.parcels || 80
            ),
          }}
        >
          <div className="flex justify-between items-center gap-1 overflow-scroll">
            <Radio
              name={`parcelas-${plan.id}`}
              options={plan.caracteristicas.map((feature) => {
                return {
                  id: JSON.stringify(feature.parcelas),
                  label: feature.label,
                  value: feature.parcelas,
                };
              })}
            />
          </div>
        </Form>
      </div>

      <div className="flex flex-col w-full gap-4">
        <h6 className="text-lg text-gray-800 font-light">Valor da parcela</h6>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Com seguro</span>
            <span className="text-2xl font-semibold text-black-800">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              }).format(feature?.valor || 0)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sem seguro</span>
            <span className="text-2xl text-black-800">
              {feature &&
                Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(
                  parseFloat((feature?.valor + feature?.seguro).toFixed(2))
                )}
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">
          Contemplações mensais
        </h6>
        <span className="text-xl font-semibold text-black-800">
          {feature?.contemplacoes}
        </span>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">
          Documentação inclusa
        </h6>
        <span className="text-xl font-semibold text-black-800">
          {feature?.documentacao ? "Sim" : "Não"}
        </span>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">Valor do crédito</h6>
        <span className="text-xl font-semibold text-black-800">
          {feature &&
            Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            }).format(parseFloat((feature?.credito).toFixed(2)))}
        </span>
      </div>
    </div>
  );
}
