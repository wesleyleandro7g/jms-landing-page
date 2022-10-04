import Image from "next/image";

import planImage from "../../../public/images/planos/VoudeHonda.png";
import { InputRadio } from "../inputs";

export function PlanCard() {
  return (
    <div
      className="
        flex
        flex-col
        bg-white
        shadow-md
        rounded-lg
        p-4
        space-y-8
        border-2
        hover:border-primary
      "
    >
      <div className="w-1/2">
        <Image
          src={planImage}
          layout="responsive"
          alt="Imagem ilustrativa do plano"
        />
      </div>

      <div className="flex flex-col w-full gap-4">
        <h6 className="text-lg text-gray-800 font-light">Número de parcelas</h6>

        <div className="flex justify-between items-center gap-1 overflow-scroll">
          <InputRadio id="80x" value="80" name="group2" />
          <InputRadio id="48x" value="48" name="group2" />
          <InputRadio id="25x" value="25" name="group2" />
          <InputRadio id="12x" value="12" name="group2" />
        </div>
      </div>

      <div className="flex flex-col w-full gap-4">
        <h6 className="text-lg text-gray-800 font-light">Valor da parcela</h6>

        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Com seguro</span>
            <span className="text-2xl font-semibold text-black-800">
              R$ 155,00
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Sem seguro</span>
            <span className="text-2xl text-black-800">R$ 151,00</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">
          Contemplações mensais
        </h6>
        <span className="text-xl font-semibold text-black-800">12</span>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">
          Documentação inclusa
        </h6>
        <span className="text-xl font-semibold text-black-800">Sim</span>
      </div>

      <div className="flex justify-between items-center w-full">
        <h6 className="text-lg text-gray-800 font-light">Valor do crédito</h6>
        <span className="text-xl font-semibold text-black-800">
          R$ 9.352,00
        </span>
      </div>
    </div>
  );
}
