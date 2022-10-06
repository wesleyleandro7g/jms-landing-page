import React, { InputHTMLAttributes, useEffect, useRef } from "react";
import { useField } from "@unform/core";

type InputType = InputHTMLAttributes<HTMLInputElement>;

export const InputText: React.FC<InputType> = (props) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, error, clearError } = useField(
    props.name || ""
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <input
      className="w-full py-3 px-2 rounded-md border border-gray-600 bg-transparent placeholder:text-gray-600 focus:border-gray-800"
      ref={inputRef}
      onFocus={clearError}
      {...props}
    />
  );
};
