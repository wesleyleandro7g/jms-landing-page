import { NextPage } from "next";
import Image from "next/image";

import filterIcon from "../../public/assets/filter-outline.svg";
import { Footer } from "../components/footer";
import { MotoSmallCard } from "../components/motoSmallCard";

import styles from "../styles/motos.module.css";

const Motorcycles: NextPage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1>James Moto Shop</h1>
        <Image src={filterIcon} className={styles.filterIcon} />
      </header>

      <main>
        <MotoSmallCard />
      </main>

      <Footer />
    </div>
  );
};

export default Motorcycles;
