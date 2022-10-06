import React, { useEffect, useRef, InputHTMLAttributes } from "react";
import { useField } from "@unform/core";

import styles from "../styles/input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  fullw?: boolean;
  options?: {
    id: string;
    value: string | number;
    label: string;
  }[];
}

const Radio: React.FC<Props> = ({ name, options, ...rest }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue = "" } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find((ref) => ref.checked)?.value || "";
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <>
      {options?.map((option, index) => (
        <div key={option.id}>
          <input
            ref={(ref) => ref && (inputRefs.current[index] = ref)}
            id={option.id}
            type="radio"
            name={name}
            defaultChecked={defaultValue.includes(option.id)}
            value={option.value}
            className={styles.inputRadio}
            {...rest}
          />
          <label
            htmlFor={option.id}
            key={option.id}
            className={styles.label}
            style={{ width: rest.fullw ? "100%" : "" }}
          >
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default Radio;
