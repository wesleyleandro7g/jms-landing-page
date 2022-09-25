import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton(props: ButtonProps) {
  return (
    <button
      className="flex
        justify-center
        items-center
        gap-2
        w-full
        md:w-auto
        rounded-lg
        md:px-10
        py-3
        border-none
        cursor-pointer
        bg-primary
        text-white
        whitespace-nowrap"
      style={{ boxShadow: "0px 0px 16px 6px rgba(205,7,7,0.49)" }}
      {...props}
    />
  );
}
