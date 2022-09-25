import React, { forwardRef, useCallback, useImperativeHandle } from "react";

export interface FilterHandles {
  toggleFilter: () => void;
}

interface FilterProps {
  children: JSX.Element | JSX.Element[];
}

const Filter: React.ForwardRefRenderFunction<FilterHandles, FilterProps> = (
  props,
  ref
) => {
  const toggleFilter = useCallback(() => {
    const filter = document.getElementById("modalFilter");

    if (filter) {
      if (filter.style.display === "flex") {
        filter.style.display = "none";
      } else {
        filter.style.display = "flex";
      }
    }
  }, []);

  useImperativeHandle(ref, () => {
    return {
      toggleFilter,
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-[9999] top-2 right-2 w-10 h-10 text-white"
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
          onClick={toggleFilter}
        />
      </svg>
    </div>
  );
};

export default forwardRef(Filter);
