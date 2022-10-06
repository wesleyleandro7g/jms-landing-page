import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { FormHelpers } from "@unform/core";
import { Form } from "@unform/web";

import { InputText } from "../components/inputs/inputText";
import { Footer } from "../components/footer";
import { PrimaryButton } from "../components/button";

import biz from "../../public/images/motos/BIZ_110/BIZ_110_BRANCA_LA.png";

const CostumerData: NextPage = () => {
  function handleSubmit(data: FormData, { reset }: FormHelpers) {
    console.log(data);

    reset();
  }

  return (
    <div className="flex flex-col w-full overflow-scroll h-screen bg-secondary">
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

      <main className="p-4">
        <div className="flex p-4 mb-4 bg-white rounded-md shadow-sm">
          <div className="w-1/2">
            <h5 className="text-gray-800 text-xl font-semibold">Pop 110i</h5>
            <h6 className="text-gray-600">Branca</h6>
            <h6 className="text-gray-600">80x de 154.00</h6>
          </div>
          <div className="relative w-1/2">
            <Image src={biz} layout="fill" objectFit="contain" />
          </div>
        </div>

        <div>
          <h4 className="text-xl text-gray-800 font-semibold">
            Como podemos entrar em contato com você?
          </h4>
        </div>

        <div className="py-4">
          <Form onSubmit={handleSubmit}>
            <div className="space-y-2 mb-4">
              <InputText name="name" placeholder="Nome" />
              <InputText name="phone" placeholder="Telefone" />
              <InputText name="email" placeholder="E-mail" />
              <InputText name="occupation" placeholder="Profissão" />
              <InputText
                name="RGIssuanceDate"
                placeholder="Data de expedição do RG"
              />
              <InputText name="marital status" placeholder="Estado civil" />
              <InputText name="monthly income" placeholder="Renda mensal" />
              <InputText name="equity value" placeholder="Valor patrimonial" />
              <InputText
                name="identity"
                placeholder="Documento de identificação"
              />
            </div>
            <PrimaryButton
              style={{
                boxShadow: "",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              Ir para o pagamento
            </PrimaryButton>
          </Form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostumerData;
