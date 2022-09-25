import React, { forwardRef, useCallback, useImperativeHandle } from "react";

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
    <div
      id="modalFilter"
      className="
        hidden
        justify-center
        items-end
        absolute
        bottom-0
        right-0
        w-full
        h-full
        z-[999]
        border-none
        bg-black/75
        backdrop-blur-sm
      "
    >
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          w-full
          rounded-t-2xl
          p-4
          gap-12
          bg-white
          z-[9999]
        "
      >
        {props.children}
      </div>
      <button className="absolute" onClick={toggleModal}>
        Fechar
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[9999] top-5 right-5 w-10 h-10 text-white"
        viewBox="0 0 512 512"
      >
        <title>Close</title>
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
    </div>
  );
};

export default forwardRef(Modal);
