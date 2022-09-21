import React from "react";

import styles from "../styles/footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <h1>James Moto Shop</h1>

      <div>
        <a href="#" target="_blank">
          Termos de uso
        </a>
        <a href="#" target="_blank">
          Políticas de privacidade
        </a>
      </div>

      <h6>Copyright 2022 © James Moto Shop</h6>
    </footer>
  );
}
