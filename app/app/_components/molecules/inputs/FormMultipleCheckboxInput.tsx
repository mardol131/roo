"use client";

import { GenerateTexts, TextProps } from "@/app/_components/atoms/Text";
import { ChangeEvent, useState } from "react";
import { FormCheckboxInput, FormCheckboxInputProps } from "./FormCheckboxInput";
import FormInputLabel from "./FormInputLabel";

export type FormMultipleCheckboxInputProps = {
  blockType: "formmultiplecheckboxinput";
  checkboxes: FormCheckboxInputProps[];
  label: string;
  spanTwo?: boolean;
  required?: boolean;
  value: string;
};

export function FormMultipleCheckboxInput(
  props: FormMultipleCheckboxInputProps
) {
  const [values, setValues] = useState<string[]>([]);

  function hasValueHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setValues([...values, e.target.value]);
    } else {
      const index = values.indexOf(e.target.value);

      if (index !== -1) {
        setValues((prev) => prev.filter((v) => v !== e.target.value));
      }
    }
  }

  const isRequired = props.required && values.length === 0;

  return (
    <div
      className={`${
        props.spanTwo && "col-span-2"
      } flex flex-col gap-5 w-full items-start justify-start`}
    >
      <div className="">
        {props.label && <FormInputLabel text={props.label} />}
      </div>
      <div
        className={`${props.spanTwo ? "grid md:grid-cols-2 gap-x-5" : "flex flex-col"} gap-2 w-full`}
      >
        {props.checkboxes.map((item, i) => {
          return (
            <FormCheckboxInput
              key={item.value + item.label}
              {...item}
              required={isRequired}
              onChange={hasValueHandler}
              name={props.value}
              id={item.id}
              value={item.value}
            />
          );
        })}
      </div>
    </div>
  );
}
