import React, { forwardRef, useCallback, useImperativeHandle } from "react";

import styles from "../styles/modal.module.css";

export interface ModalHandles {
  toggleModal: () => void;
}

interface ModalProps {
  children: JSX.Element | JSX.Element[];
}

const Modal: React.ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  props,
  ref
) => {
  const toggleModal = useCallback(() => {
    const modal = document.getElementById("modalFilter");

    if (modal) {
      if (modal.style.display === "flex") {
        modal.style.display = "none";
      } else {
        modal.style.display = "flex";
      }
    }
  }, []);

  useImperativeHandle(ref, () => {
    return {
      toggleModal,
    };
  });

  return (
    <div id="modalFilter" className={styles.overlay}>
      <div className={styles.content}>{props.children}</div>
      <button className={styles.close} onClick={toggleModal}>
        Fechar
      </button>
    </div>
  );
};

export default forwardRef(Modal);
