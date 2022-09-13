import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Footer } from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>James Moto Shop | Consórcio Nacional Honda</title>
        <meta name="description" content="Consórcio nacional honda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <Footer />
    </div>
  );
};

export default Home;
