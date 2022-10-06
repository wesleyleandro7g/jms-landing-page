import React, { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import type { Moto } from "../types/moto";
import type { Plan } from "../types/plan";

import { Footer } from "../components/footer";
import { PrimaryButton } from "../components/button";
import { InfoCard } from "../components/cards/infoCard";
import { MotoCard } from "../components/cards/motoCard";
import { Accordion } from "../components/accordion";

import questions from "../services/questions.json";
import { motos } from "../services/database";
import { PurchaseContext } from "../contexts/purchaseContext";

import chevronDown from "../../public/assets/chevron-down.svg";
import whatsappLogo from "../../public/assets/logo-whatsapp.svg";
import step1 from "../../public/assets/consortium-steps-1.svg";
import step2 from "../../public/assets/consortium-steps-2.svg";
import step3 from "../../public/assets/consortium-steps-3.svg";
import step4 from "../../public/assets/consortium-steps-4.svg";

const Home: NextPage = () => {
  const router = useRouter();
  const { setProductSelected } = useContext(PurchaseContext);

  function getLowerPrice(plans: Plan[]): number {
    const values: Array<number> = [];

    plans.map((item) => {
      item.caracteristicas.map((feature) => {
        values.push(feature.valor);
      });
    });

    return Math.min(...values);
  }

  function navigateToProduct(moto: Moto) {
    setProductSelected({
      id: moto.id,
      parcels: 80,
      color: "#fff",
      colorName: "Branca",
      documentation: false,
      value: getLowerPrice(moto.planos),
    });

    router.push(`/motos/${moto.id}`);
  }

  return (
    <div>
      <Head>
        <title>James Moto Shop | Consórcio Nacional Honda</title>
        <meta name="description" content="Consórcio nacional honda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="w-full h-screen bg-[url('../../public/assets/offroad.jpg')] bg-cover bg-no-repeat bg-left md:bg-center">
          <div className="flex flex-col ustify-center items-start h-full p-8 md:p-32 relative bg-[#00000098] md:bg-gradient-to-r from-black to-black-10">
            <div className="flex flex-col md:gap-4">
              <h6 className="text-xl italic font-roboto font-black mb-16 text-white">
                James Moto Shop
              </h6>
              <h1 className="text-5xl font-bold text-white">
                Consórcio Nacional <br />{" "}
                <span className="text-primary">Honda</span>
              </h1>
              <p className="text-xl text-white max-w-screen-sm mt-4 md:mt-0">
                Mais de 6 milhões de clientes já realizaram o seu sonho com o
                Consórcio Nacional Honda. Realize você também!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center w-full mt-16 gap-4">
              <Link href="/motos">
                <PrimaryButton>ESCOLHA SUA MOTO</PrimaryButton>
              </Link>
              <a href="#consorcio" className="text-white underline">
                Saiba mais
              </a>
            </div>

            <div className="flex justify-center items-center w-full mt-16">
              <a href="#consorcio" className="animate-bounce">
                <Image
                  src={chevronDown}
                  width={35}
                  height={35}
                  alt="Ìcone ilustrativo"
                />
              </a>
            </div>

            <div className="hidden md:block w-full h-28 absolute bottom-0 right-0 bg-[url('../../public/assets/wave.svg')] bg-cover bg-no-repeat" />
          </div>
        </section>

        <section
          id="consorcio"
          className="flex flex-col justify-center items-center text-center w-full h-screen gap-8 p-8 bg-secondary"
        >
          <iframe
            src="https://www.youtube.com/embed/LmGBsCS8g8Q"
            title="Como funciona um consórcio"
            frameBorder="0"
            allow="accelerometer;autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-44 md:w-[600px] md:h-[300px]"
          />
          <p className="max-w-screen-sm text-gray-800 text-xl font-light">
            Com <span className="text-primary">40 anos</span> de tradição e mais
            de{" "}
            <span className="text-primary">6 milhões de motos Honda 0km</span>{" "}
            entregues, o <span className="text-primary">Consórcio Honda</span>{" "}
            conta com centenas de concessionárias em todo o país para oferecer
            suporte e atender os clientes da melhor forma.
          </p>
          <Link href="/motos">
            <PrimaryButton>ESCOLHA SUA MOTO</PrimaryButton>
          </Link>
        </section>

        <section className="flex flex-col justify-center items-center text-center w-full h-full md:h-screen p-8 bg-secondary">
          <h2 className="text-5xl text-black-800 font-bold">
            Facilidade e <span className="text-primary">confiança</span>
          </h2>
          <p className="text-base">Veja como é simples realizar o seu sonho</p>
          <div className="flex flex-wrap gap-8 my-16 mx-0">
            <InfoCard
              image={step1}
              title="Adquira sua cota de"
              titleSpan="consórcio"
              description="Temos diversos planos, com várias opções de prazos e parcelas."
            />
            <InfoCard
              image={step2}
              title="Pagamento das"
              titleSpan="parcelas"
              description="Realizando o pagamento em dia, você garante a participação nas assembleias."
            />
            <InfoCard
              image={step3}
              title="Participe das"
              titleSpan="assembléias"
              description="Você poderá ser contemplado por sorteio, lance fixo ou lance livre."
            />
            <InfoCard
              image={step4}
              title="Todos serão"
              titleSpan="contemplados"
              description="Todos os participantes do grupo serão contemplados até o final do prazo escolhido."
            />
          </div>
          <Link href="/motos">
            <PrimaryButton>ESCOLHA SUA MOTO</PrimaryButton>
          </Link>
        </section>

        <section className="w-full md:h-full bg-[url('../../public/assets/offroad-two.jpg')] bg-cover bg-no-repeat">
          <div className="flex flex-col justify-center items-center text-center h-full relative md:pt-16 bg-gradient-to-b from-[#00000010] to-[#000000]">
            <div className="my-16">
              <h2 className="text-5xl text-white font-bold">
                Escolha <span className="text-primary">sua moto</span>
              </h2>
              <p className="hidden md:block text-base text-white">
                Modelos de moto para todos os gostos
              </p>
            </div>
            <div className="flex w-full gap-4 px-4 py-0 overflow-x-scroll md:overflow-x-hidden">
              {motos.slice(0, 5).map((moto) => (
                <MotoCard
                  key={moto.id}
                  id={moto.id}
                  name={moto.nome}
                  value={getLowerPrice(moto.planos)}
                  image={moto.cores[0].images[0]}
                  onClick={() => navigateToProduct(moto)}
                />
              ))}
            </div>
            <div className="flex justify-center items-center w-full px-4 my-16">
              <Link href="/motos">
                <PrimaryButton>Veja todas as motos</PrimaryButton>
              </Link>
            </div>
            <div className="hidden md:block w-full h-20 absolute top-0 right-0 bg-[url('../../public/assets/wave-inverted.svg')] bg-cover bg-no-repeat" />
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full px-2 py-16 bg-black">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-white font-bold">
              Dúvidas <span className="text-primary">frequentes</span>
            </h2>
            <p className="text-white">Tem alguma dúvida?</p>
          </div>

          <div className="flex flex-col w-full gap-2 p-0 md:px-8 md:py-0 mb-2 md:mb-16">
            {questions.map((question) => (
              <Accordion
                key={question.id}
                id={question.id}
                title={question.title}
                description={question.description}
              />
            ))}
          </div>
          <Link href="/motos">
            <PrimaryButton>ESCOLHA SUA MOTO</PrimaryButton>
          </Link>
        </section>

        <section className="flex flex-col justify-center items-center text-center w-full px-8 py-16 bg-secondary">
          <h3 className="text-2xl md:text-3xl text-black-800">
            Ainda com dúvidas?
          </h3>
          <p className="max-w-screen-sm text-black-800 mt-4 mb-16">
            Fale agora mesmo com a nossa equipe pelo WhatsApp e tire todas as
            suas dúvidas em relação ao consórcio.
          </p>
          <PrimaryButton
            style={{
              backgroundColor: "#18df61",
              boxShadow: "0px 0px 16px #18df61",
            }}
          >
            <Image src={whatsappLogo} alt="Logo do whatsapp" /> FALE COM A NOSSA
            EQUIPE
          </PrimaryButton>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
