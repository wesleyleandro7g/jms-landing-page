import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { Footer } from "../components/footer";
import { CallToAction, OutlinedButton } from "../components/button";
import { Card } from "../components/cards";
import { MotorcycleCard } from "../components/motorcycleCard";

import database from "../services/database.json";

import chevronDown from "../../public/assets/chevron-down.svg";
import step1 from "../../public/assets/consortium-steps-1.svg";
import step2 from "../../public/assets/consortium-steps-2.svg";
import step3 from "../../public/assets/consortium-steps-3.svg";
import step4 from "../../public/assets/consortium-steps-4.svg";

import styles from "../styles/home.module.css";
import { Accordion } from "../components/accordion";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>James Moto Shop | Consórcio Nacional Honda</title>
        <meta name="description" content="Consórcio nacional honda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.start}>
          <div className={styles.overlay}>
            <div className={styles.presentation}>
              <h6>James Moto Shop</h6>
              <h1>
                Consórcio Nacional <br /> <span>Honda</span>
              </h1>
              <p>
                Mais de 6 milhões de clientes já realizaram o seu sonho com o
                Consórcio Nacional Honda. Realize você também!
              </p>
            </div>

            <div className={styles.actionButtons}>
              <CallToAction>ESCOLHA SUA MOTO</CallToAction>
              <a href="#consorcio">Saiba mais</a>
            </div>

            <div className={styles.chevronWrapper}>
              <a href="#consorcio" className={styles.chevronDown}>
                <Image src={chevronDown} width={35} height={35} />
              </a>
            </div>

            <div className={styles.waveWrapper} />
          </div>
        </section>

        <section id="consorcio" className={styles.consortium}>
          <iframe
            src="https://www.youtube.com/embed/LmGBsCS8g8Q"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            Com <span>40 anos</span> de tradição e mais de{" "}
            <span>6 milhões de motos Honda 0km</span> entregues, o{" "}
            <span>Consórcio Honda</span> conta com centenas de concessionárias
            em todo o país para oferecer suporte e atender os clientes da melhor
            forma.
          </p>
          <CallToAction>ESCOLHA SUA MOTO</CallToAction>
        </section>

        <section className={styles.howWorks}>
          <h2>
            Facilidade e <span>confiança</span>
          </h2>
          <p>Veja como é simples realizar o seu sonho</p>
          <div className={styles.steps}>
            <Card
              image={step1}
              title="Adquira sua cota de"
              titleSpan="consórcio"
              description="Temos diversos planos, com várias opções de prazos e parcelas."
            />
            <Card
              image={step2}
              title="Pagamento das"
              titleSpan="parcelas"
              description="Realizando o pagamento em dia, você garante a participação nas assembleias."
            />
            <Card
              image={step3}
              title="Participe das"
              titleSpan="assembléias"
              description="Você poderá ser contemplado por sorteio, lance fixo ou lance livre."
            />
            <Card
              image={step4}
              title="Todos serão"
              titleSpan="contemplados"
              description="Todos os participantes do grupo serão contemplados até o final do prazo escolhido."
            />
          </div>
          <CallToAction>ESCOLHA SUA MOTO</CallToAction>
        </section>

        <section className={styles.motorcycles}>
          <div className={styles.overlay}>
            <div className={styles.info}>
              <h2>
                Escolha <span>sua moto</span>
              </h2>
              <p>Modelos de moto para todos os gostos</p>
            </div>
            <div className={styles.motos}>
              <MotorcycleCard />
              <MotorcycleCard />
              <MotorcycleCard />
              <MotorcycleCard />
              <MotorcycleCard />
            </div>
            <div className={styles.info}>
              <OutlinedButton>Veja todas as motos</OutlinedButton>
            </div>
            <div className={styles.waveWrapper} />
          </div>
        </section>

        <section className={styles.commonQuestions}>
          <div className={styles.headerWrapper}>
            <h2>
              Dúvidas <span>frequentes</span>
            </h2>
            <p>Tem alguma dúvida?</p>
          </div>

          <div className={styles.accordionWrapper}>
            <Accordion
              id="1"
              title="Pergunta"
              description="Resposta da pergunta"
            />
            <Accordion
              id="2"
              title="Pergunta"
              description="Resposta da pergunta"
            />
            <Accordion
              id="3"
              title="Pergunta"
              description="Resposta da pergunta"
            />
            <Accordion
              id="4"
              title="Pergunta"
              description="Resposta da pergunta"
            />
          </div>
          <CallToAction>ESCOLHA SUA MOTO</CallToAction>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
